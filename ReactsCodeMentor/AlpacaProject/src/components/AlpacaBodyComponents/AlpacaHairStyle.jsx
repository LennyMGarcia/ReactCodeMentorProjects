import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaHairStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultButton = withAlpacaButton('Default')
    const Bang = withAlpacaButton('Bang')
    const Curls = withAlpacaButton('Curls')
    const Elegant = withAlpacaButton('Elegant')
    const Fancy = withAlpacaButton('Fancy')
    const Quiff = withAlpacaButton('Quiff')
    const Short = withAlpacaButton('Short')

    return (
        <div className="alpaca-Buttons">
            <DefaultButton onClick={() => handleClick(buttonFunctions.defaultButton)} />
            <Bang onClick={() => handleClick(buttonFunctions.bangButton)} />
            <Curls onClick={() => handleClick(buttonFunctions.curlsButton)} />
            <Elegant onClick={() => handleClick(buttonFunctions.elegantButton)} />
            <Fancy onClick={() => handleClick(buttonFunctions.fancyButton)} />
            <Quiff onClick={() => handleClick(buttonFunctions.quiffButton)} />
            <Short onClick={() => handleClick(buttonFunctions.shortButton)} />

        </div>
    )
}

AlpacaHairStyle.propTypes = {
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

export default AlpacaHairStyle;