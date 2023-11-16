import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaEarsStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    return (
        <div className="alpaca-Buttons">
            <DefaultEarsButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <TiltBackward onClick={() => handleClick(buttonFunctions.tiltBackwardButton)} />
            <TiltFoward onClick={() => handleClick(buttonFunctions.tiltForwardButton)} />
           
        </div>
    )
}

AlpacaEarsStyle.propTypes = {
    buttonFunctions: PropTypes.object
};

const DefaultEarsButton = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Default</button>
        </div>
    );
};

DefaultEarsButton.propTypes = {
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

const TiltFoward = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Tilt-foward</button>
        </div>
    );
};

TiltFoward.propTypes = {
    onClick: PropTypes.func,
};


export default AlpacaEarsStyle;