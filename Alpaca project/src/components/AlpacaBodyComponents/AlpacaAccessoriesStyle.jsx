import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaAccessoriesStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <Earings onClick={() => handleClick(buttonFunctions.earingsButton)} />
            <Flowers onClick={() => handleClick(buttonFunctions.flowerButton)} />
            <Glasses onClick={() => handleClick(buttonFunctions.glassesButton)} />
            <Headphone onClick={() => handleClick(buttonFunctions.headphoneButton)} />
           
        </div>
    )
}

AlpacaAccessoriesStyle.propTypes = {
    buttonFunctions: PropTypes.object
};

const Earings = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Earings</button>
        </div>
    );
};

Earings.propTypes = {
    onClick: PropTypes.func
};

const Flowers = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Flowers</button>
        </div>
    );
};

Flowers.propTypes = {
    onClick: PropTypes.func,
};

const Glasses = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Glasses</button>
        </div>
    );
};

Glasses.propTypes = {
    onClick: PropTypes.func,
};

const Headphone = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Headphone</button>
        </div>
    );
};

Headphone.propTypes = {
    onClick: PropTypes.func,
};


export default AlpacaAccessoriesStyle;