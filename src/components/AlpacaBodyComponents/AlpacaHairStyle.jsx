import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaHairStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

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

const Bang = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Bang</button>
        </div>
    );
};

Bang.propTypes = {
    onClick: PropTypes.func,
};

const Curls= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Curls</button>
        </div>
    );
};

Curls.propTypes = {
    onClick: PropTypes.func,
};

const Elegant = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Elegant</button>
        </div>
    );
};

Elegant.propTypes = {
    onClick: PropTypes.func
};

const Fancy = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Fancy</button>
        </div>
    );
};

Fancy.propTypes = {
    onClick: PropTypes.func,
};

const Quiff= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Quiff</button>
        </div>
    );
};

Quiff.propTypes = {
    onClick: PropTypes.func,
};

const Short= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Short</button>
        </div>
    );
};

Short.propTypes = {
    onClick: PropTypes.func,
};

export default AlpacaHairStyle;