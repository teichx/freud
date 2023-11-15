import PdfPrinter from 'pdfmake';
import { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

export class FreudPdfDocument extends PdfPrinter {
  constructor() {
    super({
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique',
      },
    });
  }

  createDocumentStream(
    docDefinition: TDocumentDefinitions,
    options?: BufferOptions
  ) {
    return new Promise<Buffer>((resolve) => {
      const pdfDocument = this.createPdfKitDocument(docDefinition, options);

      const buffer: Uint8Array[] = [];

      pdfDocument.on('data', (chunk: Uint8Array) => {
        buffer.push(chunk);
      });
      pdfDocument.on('end', () => {
        resolve(Buffer.concat(buffer));
      });
      pdfDocument.end();
    });
  }
}
