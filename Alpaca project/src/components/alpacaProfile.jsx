


import PropTypes from 'prop-types';
import '../components/AlpacaBodyComponents/Alpaca.css'

const AlpacaProfile = ({alpacaBody}) => {

    

    return (
        <div className="alpaca-Profile">
            <AlpacaBackground image={alpacaBody.backgroundImage} />
            <AlpacaEars image={alpacaBody.earsImage} />
            <AlpacaNeck image={alpacaBody.neckImage} />
            <AlpacaLeg image={alpacaBody.legsImage} />
            <AlpacaNose image={alpacaBody.noseImage} />
            <AlpacaHair image={alpacaBody.hairImage} />
            <AlpacaEyes image={alpacaBody.eyesImage} />
            <AlpacaAccesory image={alpacaBody.accessoryImage} />
            <AlpacaMouth image={alpacaBody.mouthImage} />
        </div>
    );
}

AlpacaProfile.propTypes ={
    alpacaBody: PropTypes.any
}

const AlpacaAccesory = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaAccesory.propTypes = {
    image: PropTypes.string
};

const AlpacaBackground = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaBackground.propTypes = {
    image: PropTypes.string
};

const AlpacaEars = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaEars.propTypes = {
    image: PropTypes.string
};

const AlpacaEyes = ({ image }) => {

    return (
        <div className="alpaca-profile-child ">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaEyes.propTypes = {
    image: PropTypes.string
};

const AlpacaHair = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaHair.propTypes = {
    image: PropTypes.string
};

const AlpacaLeg = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaLeg.propTypes = {
    image: PropTypes.string
};



const AlpacaMouth = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
}

AlpacaMouth.propTypes = {
    image: PropTypes.string
};

const AlpacaNeck = ({ image }) => {

    return (
        <div className="alpaca-profile-child ">
            <img src={image} alt="" />
        </div>
    );
}

AlpacaNeck.propTypes = {
    image: PropTypes.string
};

const AlpacaNose = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaNose.propTypes = {
    image: PropTypes.string
};

export default AlpacaProfile;