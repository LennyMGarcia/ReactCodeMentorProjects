import PropTypes from 'prop-types';
import '../components/AlpacaBodyComponents/alpaca.css'

const AccesorizeAlpaca = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

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
    )
}

AccesorizeAlpaca.propTypes = {
    buttonFunctions: PropTypes.object
};

const AlpacaAccesoryButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Accessory</button>
        </div>
    );
};

AlpacaAccesoryButton.propTypes = {
    onClick: PropTypes.func
};

const AlpacaBackgroundButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Background</button>
        </div>
    );
};

AlpacaBackgroundButton.propTypes = {
    onClick: PropTypes.func,
};

const AlpacaEarsButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Ears</button>
        </div>
    );
};

AlpacaEarsButton.propTypes = {
    onClick: PropTypes.func,
};

const AlpacaEyesButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child ">
            <button onClick={onClick}>Eyes</button>
        </div>
    );
};

AlpacaEyesButton.propTypes = {
    onClick: PropTypes.func,
};


const AlpacaHairButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Hair</button>
        </div>
    );
};

AlpacaHairButton.propTypes = {
    onClick: PropTypes.func,
};


const AlpacaLegButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Legs</button>
        </div>
    );
};

AlpacaLegButton.propTypes = {
    onClick: PropTypes.func,
};



const AlpacaMouthButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Mouth</button>
        </div>
    );
}

AlpacaMouthButton.propTypes = {
    onClick: PropTypes.func,
};

const AlpacaNeckButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child ">
            <button onClick={onClick}>Neck</button>
        </div>
    );
}

AlpacaNeckButton.propTypes = {
    onClick: PropTypes.func,
};



export default AccesorizeAlpaca;