import PropTypes from 'prop-types';
import '../components/AlpacaBodyComponents/alpaca.css'

const withAlpacaButton = (buttonName) => {
    const AlpacaButton = ({ onClick }) => {
        return (
            <div className="alpaca-button-child">
                <button onClick={onClick}>{buttonName}</button>
            </div>
        );
    };

    AlpacaButton.propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    return AlpacaButton;
};

const AccesorizeAlpaca = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    };

    const AlpacaBackgroundButton = withAlpacaButton('Background');
    const AlpacaEarsButton = withAlpacaButton('Ears');
    const AlpacaNeckButton = withAlpacaButton('Neck');
    const AlpacaAccesoryButton = withAlpacaButton('Accessory');
    const AlpacaEyesButton = withAlpacaButton('Eyes');
    const AlpacaLegButton = withAlpacaButton('Legs');
    const AlpacaMouthButton = withAlpacaButton('Mouth');
    const AlpacaHairButton = withAlpacaButton('Hair');

    return (
        <div className="alpaca-Buttons">
            <AlpacaBackgroundButton onClick={() => handleClick(buttonFunctions.backgroundButton)} />
            <AlpacaEarsButton onClick={() => handleClick(buttonFunctions.earsButton)} />
            <AlpacaNeckButton onClick={() => handleClick(buttonFunctions.neckButton)} />
            <AlpacaAccesoryButton onClick={() => handleClick(buttonFunctions.accesoryButton)} />
            <AlpacaEyesButton onClick={() => handleClick(buttonFunctions.eyesButton)} />
            <AlpacaLegButton onClick={() => handleClick(buttonFunctions.legButton)} />
            <AlpacaMouthButton onClick={() => handleClick(buttonFunctions.mouthButton)} />
            <AlpacaHairButton onClick={() => handleClick(buttonFunctions.hairButton)} />
        </div>
    );
};

AccesorizeAlpaca.propTypes = {
    buttonFunctions: PropTypes.object,
};

export default AccesorizeAlpaca