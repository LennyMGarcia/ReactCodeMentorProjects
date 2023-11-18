import { useRef } from 'react';
import PropTypes from 'prop-types';

const AlpacaImageHandler = ({ alpacaBodyImage }) => {
    const canvasRef = useRef(null);

  const combineImages = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Configurar el tamaño del lienzo para la imagen combinada
    canvas.width = 1500; // Ancho deseado del canvas
    canvas.height = 1500; // Alto deseado del canvas

    const images = [];
    let loadedImages = 0;

    // Carga las imágenes en un arreglo
    for (const key in alpacaBodyImage) {
      const img = new Image();
      img.onload = () => {
        loadedImages++;

        // Verificar si todas las imágenes se han cargado
        if (loadedImages === Object.keys(alpacaBodyImage).length) {
          // Empieza a dibujar las imágenes en el canvas
          images.forEach((imageData) => {
            ctx.drawImage(imageData.image, imageData.x, imageData.y);
          });

          // Obtener la URL de la imagen combinada
          const combinedImageURL = canvas.toDataURL('image/png');

          // Descargar la imagen combinada
          const downloadLink = document.createElement('a');
          downloadLink.href = combinedImageURL;
          downloadLink.download = 'alpaca_combined.png'; // Nombre del archivo
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      };
      img.src = alpacaBodyImage[key];
      images.push({ image: img, x: 0, y: 0 }); // Guarda cada imagen con sus coordenadas X e Y
    }
  };

  const handleDownload = () => {
    combineImages();
  };

  return (
    <div>
      {/* Renderizar el botón de descarga y pasar la función de manejo de descarga */}
      <DownloadButton onClick={handleDownload} />

      {/* Lienzo para dibujar las imágenes */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};
    AlpacaImageHandler.propTypes ={
        alpacaBodyImage: PropTypes.any,
    }

  
    const DownloadButton = ({ onClick }) => {
        return (
            <button onClick={onClick}>
                Descargar Combinación
            </button>
        );
    };

    DownloadButton.propTypes = {
        onClick: PropTypes.func,
    }

    export default AlpacaImageHandler;