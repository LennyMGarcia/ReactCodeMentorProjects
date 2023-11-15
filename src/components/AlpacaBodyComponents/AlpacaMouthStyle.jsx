import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaMouthStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <DefaultButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <Astonished onClick={() => handleClick(buttonFunctions.astonishedButton)} />
            <Eating onClick={() => handleClick(buttonFunctions.eatingButton)} />
            <Laugh onClick={() => handleClick(buttonFunctions.laughButton)} />
            <Tongue onClick={() => handleClick(buttonFunctions.tongueButton)} />

        </div>
    )
}

AlpacaMouthStyle.propTypes = {
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

const Astonished = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Astonished</button>
        </div>
    );
};

Astonished.propTypes = {
    onClick: PropTypes.func,
};

const Eating= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Eating</button>
        </div>
    );
};

Eating.propTypes = {
    onClick: PropTypes.func,
};

const Laugh = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Laugh</button>
        </div>
    );
};

Laugh.propTypes = {
    onClick: PropTypes.func
};

const Tongue= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Tongue</button>
        </div>
    );
};

Tongue.propTypes = {
    onClick: PropTypes.func,
};


export default AlpacaMouthStyle;