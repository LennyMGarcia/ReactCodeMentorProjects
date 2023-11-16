import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaEyesStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultButton = withAlpacaButton('Default');
    const Angry = withAlpacaButton('Angry');
    const Naughty = withAlpacaButton('Naughty');
    const Panda = withAlpacaButton('Panda');
    const Smart = withAlpacaButton('Smart');
    const Star = withAlpacaButton('start');

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

export default AlpacaEyesStyle;