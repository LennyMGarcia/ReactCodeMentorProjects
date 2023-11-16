import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaLegStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <DefaultButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <Cookie onClick={() => handleClick(buttonFunctions.cookieButton)} />
            <BubbleTea onClick={() => handleClick(buttonFunctions.bubbleTeaButton)} />
            <GameConsole onClick={() => handleClick(buttonFunctions.gameConsoleButton)} />
            <TiltBackward onClick={() => handleClick(buttonFunctions.tiltBackwardButton)} />
            <TiltForward onClick={() => handleClick(buttonFunctions.tiltForwardButton)} />
            
           
        </div>
    )
}

AlpacaLegStyle.propTypes = {
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

const TiltBackward = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Tilt-backward</button>
        </div>
    );
};

TiltBackward.propTypes = {
    onClick: PropTypes.func,
};

const TiltForward= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Tilt-forward</button>
        </div>
    );
};

TiltForward.propTypes = {
    onClick: PropTypes.func,
};

const GameConsole = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Game-console</button>
        </div>
    );
};

GameConsole.propTypes = {
    onClick: PropTypes.func
};

const Cookie= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Cookie</button>
        </div>
    );
};

Cookie.propTypes = {
    onClick: PropTypes.func,
};

const BubbleTea = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Bubble-tea</button>
        </div>
    );
};

BubbleTea.propTypes = {
    onClick: PropTypes.func
};

export default AlpacaLegStyle;