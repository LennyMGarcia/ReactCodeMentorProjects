import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaAccessoriesStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const Earings = withAlpacaButton('Earings')
    const Flowers = withAlpacaButton('Flowers')
    const Glasses = withAlpacaButton('Glasses')
    const Headphone = withAlpacaButton('Headphone')

    return (
        <div className="alpaca-Buttons">
            <Earings onClick={() => handleClick(buttonFunctions.earingsButton)} />
            <Flowers onClick={() => handleClick(buttonFunctions.flowerButton)} />
            <Glasses onClick={() => handleClick(buttonFunctions.glassesButton)} />
            <Headphone onClick={() => handleClick(buttonFunctions.headphoneButton)} />
        </div>
    )
}

AlpacaAccessoriesStyle.propTypes = {
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
        onClick: PropTypes.func,
    }

    return alpacaButton;
};

export default AlpacaAccessoriesStyle;