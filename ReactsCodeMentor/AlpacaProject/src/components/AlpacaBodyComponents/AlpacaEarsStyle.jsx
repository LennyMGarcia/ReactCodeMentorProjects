import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaEarsStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultEarsButton = withAlpacaButton('Default');
    const TiltBackward = withAlpacaButton('Tilt-backward');
    const TiltForward = withAlpacaButton('Tilt-forward');

    return (
        <div className="alpaca-Buttons">
            <DefaultEarsButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <TiltBackward onClick={() => handleClick(buttonFunctions.tiltBackwardButton)} />
            <TiltForward onClick={() => handleClick(buttonFunctions.tiltForwardButton)} />

        </div>
    )
}

AlpacaEarsStyle.propTypes = {
    buttonFunctions: PropTypes.object
};

const withAlpacaButton = (buttonName) => {
    function alpacaButton({ onClick }) {
        return (
            <div className="alpaca-button-child">
                <button onClick={onClick}>{buttonName}</button>
            </div>
        )
    }

    alpacaButton.propTypes = {
        onClick: PropTypes.func
    }

    return alpacaButton
}

export default AlpacaEarsStyle;