/**
 * src/components/writeFile.tsx
 * (c) 2022 Shuzhou Liu.
 * Code is served under the MIT license.
 */

import FileSaver from 'file-saver';

function write (text: string, filename: string): void {
  var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, filename);
}

export { write };