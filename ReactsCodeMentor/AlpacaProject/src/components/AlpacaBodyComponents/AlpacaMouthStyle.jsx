import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaMouthStyle = ({ buttonFunctions }) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

    const DefaultButton = withAlpacaButton('Default')
    const Astonished = withAlpacaButton('Astonished')
    const Eating = withAlpacaButton('Eating')
    const Laugh = withAlpacaButton('Laugh')
    const Tongue = withAlpacaButton('Tongue')

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

export default AlpacaMouthStyle;