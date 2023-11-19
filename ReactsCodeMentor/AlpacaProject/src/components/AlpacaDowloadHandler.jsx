import { useRef } from 'react';
import PropTypes from 'prop-types';

const AlpacaImageHandler = ({ alpacaBodyImage }) => {
    const canvasRef = useRef(null);

  const combineImages = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 1500; 
    canvas.height = 1500; 

    const images = [];
    let loadedImages = 0;


    for (const key in alpacaBodyImage) {
      const img = new Image();
      img.onload = () => {
        loadedImages++;


        if (loadedImages === Object.keys(alpacaBodyImage).length) {
          images.forEach((imageData) => {
            ctx.drawImage(imageData.image, imageData.x, imageData.y);
          });

          const combinedImageURL = canvas.toDataURL('image/png');

          const downloadLink = document.createElement('a');
          downloadLink.href = combinedImageURL;
          downloadLink.download = 'alpaca_combined.png'; 
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      };
      img.src = alpacaBodyImage[key];
      images.push({ image: img, x: 0, y: 0 }); 
    }
  };

  const handleDownload = () => {
    combineImages();
  };

  return (
    <div>
      <DownloadButton onClick={handleDownload} />

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
