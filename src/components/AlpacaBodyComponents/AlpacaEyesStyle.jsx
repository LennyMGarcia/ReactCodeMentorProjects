import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaEyesStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <DefaultButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <Angry onClick={() => handleClick(buttonFunctions.angryButton)} />
            <Naughty onClick={() => handleClick(buttonFunctions.naughtyButton)} />
            <Panda onClick={() => handleClick(buttonFunctions.pandaButton)} />
            <Smart onClick={() => handleClick(buttonFunctions.smartButton)} />
            <Star onClick={() => handleClick(buttonFunctions.starButton)} />

        </div>
    )
}

AlpacaEyesStyle.propTypes = {
    buttonFunctions: PropTypes.object
};

const DefaultButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Default</button>
        </div>
    );
};

DefaultButton.propTypes = {
    onClick: PropTypes.func
};

const Angry = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Angry</button>
        </div>
    );
};

Angry.propTypes = {
    onClick: PropTypes.func,
};

const Naughty= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Naughty</button>
        </div>
    );
};

Naughty.propTypes = {
    onClick: PropTypes.func,
};

const Panda= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Panda</button>
        </div>
    );
};

Panda.propTypes = {
    onClick: PropTypes.func
};

const Smart= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Smart</button>
        </div>
    );
};

Smart.propTypes = {
    onClick: PropTypes.func,
};

const Star= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Star</button>
        </div>
    );
};

Star.propTypes = {
    onClick: PropTypes.func,
};


export default AlpacaEyesStyle;