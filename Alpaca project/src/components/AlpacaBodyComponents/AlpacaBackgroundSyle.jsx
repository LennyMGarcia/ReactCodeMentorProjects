import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaBackgroundStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <Blue onClick={() => handleClick(buttonFunctions.blueButton)} />
            <Darkblue onClick={() => handleClick(buttonFunctions.darkblueButton)} />
            <Green onClick={() => handleClick(buttonFunctions.greenButton)} />
            <Grey onClick={() => handleClick(buttonFunctions.greyButton)} />
            <Red onClick={() => handleClick(buttonFunctions.redButton)} />
            <Yellow onClick={() => handleClick(buttonFunctions.yellowButton)} />
           
        </div>
    )
}

AlpacaBackgroundStyle.propTypes = {
    buttonFunctions: PropTypes.object
};

const Blue = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Blue</button>
        </div>
    );
};

Blue.propTypes = {
    onClick: PropTypes.func,
};

const Darkblue= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Darkblue</button>
        </div>
    );
};

Darkblue.propTypes = {
    onClick: PropTypes.func,
};

const Green = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Green</button>
        </div>
    );
};

Green.propTypes = {
    onClick: PropTypes.func
};

const Grey = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Grey</button>
        </div>
    );
};

Grey.propTypes = {
    onClick: PropTypes.func,
};

const Red = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Red</button>
        </div>
    );
};

Red.propTypes = {
    onClick: PropTypes.func,
};

const Yellow= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Yellow</button>
        </div>
    );
};

Yellow.propTypes = {
    onClick: PropTypes.func,
};

export default AlpacaBackgroundStyle;