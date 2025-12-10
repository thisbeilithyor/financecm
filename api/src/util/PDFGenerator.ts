import PDFDocument from "pdfkit";
import fs from "fs";

export class PDFGenerator {
    private speicherort: string;

    constructor(speicherort: string){
        this.speicherort = speicherort;
    }

    public static createPDFFile(filename: string, speicherort = "fcm_file_exchange/", filetype?: string) {
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(`/file_exchange/${filetype ? filename.concat(filetype) : filename}`));
        
        doc
        .fontSize(25)
        .text('Hello from PDFKit!', 100, 100)
        .fillColor('blue')
        .text('Link to website', 100, 125)
        .link(100, 125, 160, 27, 'https://www.geeksfor Geeks.org/');

        doc.end();
        console.log('PDF generated with PDFKit.');
    }
}