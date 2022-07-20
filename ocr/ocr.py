# ocr/ocr.py
# (c) 2022 Shuzhou Liu.
# Code served under the MIT license.

from paddleocr import PaddleOCR, draw_ocr
import cv2
import sys
import io

ocr = PaddleOCR (use_angle_cls=True, use_gpu=False)

# Image path for inclusion and output.
img_path = ""

if (len(sys.argv) < 2):
    print("Usage: python ocr.py <image_path>")
    exit(1)
else:
    img_path = sys.argv[1]

result = ocr.ocr(img_path, cls=True)

img = cv2.imread(img_path)
boxes = [line[0] for line in result]
txts = [line[1][0] for line in result]
scores = [line[1][1] for line in result]

str = ""

for i in txts:
    str += i

with io.open('ocr.txt', 'w', encoding='utf-8') as f:
    f.write(str)

if (len(sys.argv) == 4 and sys.argv[3] == "--show-opencv"):
    img = draw_ocr(img, boxes, txts, scores)
    cv2.imshow("result",img)
    cv2.waitKey(0)
