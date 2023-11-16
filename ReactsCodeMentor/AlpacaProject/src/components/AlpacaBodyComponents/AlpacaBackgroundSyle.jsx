import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaBackgroundStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const Blue = withAlpacaButton('Blue')
    const Darkblue = withAlpacaButton("DarkBlue")
    const Green = withAlpacaButton('Green')
    const Grey = withAlpacaButton('grey')
    const Red = withAlpacaButton('Red')
    const Yellow = withAlpacaButton("Yellow")

    return (
        <div className="alpaca-Buttons">
            <Blue onClick={() => handleClick(buttonFunctions.blueButton)} />
            <Darkblue onClick={() => handleClick(buttonFunctions.darkblueButton)} />
            <Green onClick={() => handleClick(buttonFunctions.greenButton)} />
            <Grey onClick={() => handleClick(buttonFunctions.greyButton)} />
            <Red onClick={() => handleClick(buttonFunctions.redButton)} />
            <Yellow onClick={() => handleClick(buttonFunctions.yellowButton)} />
        </div>
    )
}

AlpacaBackgroundStyle.propTypes = {
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



export default AlpacaBackgroundStyle;