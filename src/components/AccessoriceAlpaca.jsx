import PropTypes from 'prop-types';
import '../components/Alpaca.css'

const AccesorizeAlpaca = ({ buttonList }) => {


    return (
        <div className="alpaca-Buttons">
            <AlpacaBackgroundButton onClick={buttonList.backgroundButton} />
            <AlpacaEarsButton onClick={buttonList.earsButton} />
            <AlpacaNeckButton onClick={buttonList.neckButton} />
            <AlpacaAccesoryButton onClick={buttonList.accesoryButton} />
            <AlpacaEyesButton onClick={buttonList.eyesButton} />
            <AlpacaLegButton onClick={buttonList.legButton} />
            <AlpacaMouthButton onClick={buttonList.mouthButton} />
            <AlpacaHairButton onClick={buttonList.hairButton} />
        </div>
    )
}

AccesorizeAlpaca.propTypes = {
    buttonList: PropTypes.object.isRequired
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