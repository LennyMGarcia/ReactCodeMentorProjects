
import accesoryImage from '../assets/alpaca/accessories/earings.png';
import backgroundImage from '../assets/alpaca/backgrounds/blue50.png';
import earsImage from '../assets/alpaca/ears/default.png';
import eyesImage from '../assets/alpaca/eyes/angry.png';
import hairImage from '../assets/alpaca/hair/bang.png';
import legsImage from '../assets/alpaca/leg/bubble-tea.png';
import mouthImage from '../assets/alpaca/mouth/astonished.png';
import neckImage from '../assets/alpaca/neck/bend-backward.png';
import noseImage from '../assets/alpaca/nose.png';

import PropTypes from 'prop-types';
import '../components/Alpaca.css'

const AlpacaProfile = () => {

    const alpacaBody = {
        accessory: accesoryImage,
        background: backgroundImage,
        ears: earsImage,
        eyes: eyesImage,
        hair: hairImage,
        leg: legsImage,
        mouth: mouthImage,
        neck: neckImage,
        nose: noseImage,
    };

    return (
        <div className="alpaca-Profile">
            <AlpacaBackground image={alpacaBody.background} />
            <AlpacaEars image={alpacaBody.ears} />
            <AlpacaNeck image={alpacaBody.neck} />
            <AlpacaAccesory image={alpacaBody.accessory} />
            <AlpacaEyes image={alpacaBody.eyes} />
            <AlpacaLeg image={alpacaBody.leg} />
            <AlpacaMouth image={alpacaBody.mouth} />
            <AlpacaNose image={alpacaBody.nose} />
            <AlpacaHair image={alpacaBody.hair} />
        </div>
    );
}

const AlpacaAccesory = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaAccesory.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaBackground = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaBackground.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaEars = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaEars.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaEyes = ({ image }) => {

    return (
        <div className="alpaca-profile-child ">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaEyes.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaHair = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaHair.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaLeg = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaLeg.propTypes = {
    image: PropTypes.string.isRequired,
};



const AlpacaMouth = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
}

AlpacaMouth.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaNeck = ({ image }) => {

    return (
        <div className="alpaca-profile-child ">
            <img src={image} alt="" />
        </div>
    );
}

AlpacaNeck.propTypes = {
    image: PropTypes.string.isRequired,
};

const AlpacaNose = ({ image }) => {

    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaNose.propTypes = {
    image: PropTypes.string.isRequired,
};

export default AlpacaProfile;