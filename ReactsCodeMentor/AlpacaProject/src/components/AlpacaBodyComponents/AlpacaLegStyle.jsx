import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaLegStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultButton = withAlpacaButton('Default')
    const TiltBackward = withAlpacaButton('Tilt-backward')
    const TiltForward = withAlpacaButton('Tilt-forward')
    const GameConsole = withAlpacaButton('Game console')
    const Cookie = withAlpacaButton('Cookie')
    const BubbleTea = withAlpacaButton('Bubble-tea')

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

export default AlpacaLegStyle;