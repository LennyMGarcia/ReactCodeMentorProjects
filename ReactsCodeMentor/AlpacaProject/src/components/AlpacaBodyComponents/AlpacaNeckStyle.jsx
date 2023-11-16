import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaNeckStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultButton = withAlpacaButton('Default')
    const BendBackward = withAlpacaButton('Bend-backward')
    const BenForward = withAlpacaButton('Bend-forward')
    const Thick = withAlpacaButton('Thick')

    return (
        <div className="alpaca-Buttons">
            <DefaultButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <BendBackward onClick={() => handleClick(buttonFunctions.bendBackwardButton)} />
            <BenForward onClick={() => handleClick(buttonFunctions.bendForwardButton)} />
            <Thick onClick={() => handleClick(buttonFunctions.thickButton)} />
        </div>
    )
}

AlpacaNeckStyle.propTypes = {
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

export default AlpacaNeckStyle;