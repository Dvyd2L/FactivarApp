/**
 * Convierte el contenido de un elemento HTML en un archivo PDF.
 * @param {string} htmlElementId - El ID del elemento HTML que contiene el contenido a convertir.
 * @param {Object} [config] - Opciones de configuración para la generación del PDF.
 * @param {string} [config.filename] - El nombre del archivo PDF resultante.
 * @returns {void}
 */
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * utilidad que convierte un contenido de html a pdf
 * @param {string} htmlElementId id del elemento que contiene el contenido que deseamos convertir a pdf
 * @returns 
 */
export const pdfHelper = (htmlElementId: string, config?: { filename?:string }) => {
  const { filename } = config ?? {};
  const $data = document.getElementById(htmlElementId);
  const doc = new jsPDF('p', 'pt', 'a4');
  const options = {
    background: 'white',
    scale: 3,
  };

  if (!$data) {
    return;
  }

  html2canvas($data, options)
    .then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      doc.addImage(
        img,
        'PNG',
        bufferX,
        bufferY,
        pdfWidth,
        pdfHeight,
        undefined,
        'FAST'
      );
      return doc;
    })
    .then((docResult) => {
      docResult.save(filename ?? `${new Date().toISOString()}_tutorial.pdf`);
    });
};
