import PropTypes from 'prop-types';
import '../AlpacaBodyComponents/Alpaca.css'

const AlpacaNeckStyle = ({ buttonFunctions}) => {
    const handleClick = (buttonFunction) => {
        buttonFunction();
    }

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

const BendBackward = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Bend-backward</button>
        </div>
    );
};

BendBackward.propTypes = {
    onClick: PropTypes.func,
};

const BenForward= ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Ben-forward</button>
        </div>
    );
};

BenForward.propTypes = {
    onClick: PropTypes.func,
};

const Thick = ({ onClick }) => {

    return (
        <div className="alpaca-button-child">
            <button onClick={onClick}>Thick</button>
        </div>
    );
};

Thick.propTypes = {
    onClick: PropTypes.func
};



export default AlpacaNeckStyle;