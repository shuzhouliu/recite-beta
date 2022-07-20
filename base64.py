import base64


with open("pre_ocr.txt","r") as f:
    imgdata = base64.b64decode(f.read())
    file = open('pre_ocr.jpg', 'wb')
    file.write(imgdata)
    file.close()