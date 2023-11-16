
import PropTypes from 'prop-types';
import '../components/AlpacaBodyComponents/Alpaca.css'

const AlpacaPart = ({ image }) => {
    return (
        <div className="alpaca-profile-child">
            <img src={image} alt="" />
        </div>
    );
};

AlpacaPart.propTypes = {
    image: PropTypes.string.isRequired,
};

const withAlpacaPart = (Component, name) => {
    const AlpacaPartWrapper = ({ alpacaBody }) => {
        const imageName = alpacaBody[`${name}Image`] || '';

        return <Component image={imageName} />;
    };

    AlpacaPartWrapper.propTypes = {
        alpacaBody: PropTypes.shape({

            backgroundImage: PropTypes.string.isRequired,
            earsImage: PropTypes.string.isRequired,
            neckImage: PropTypes.string.isRequired,
            legsImage: PropTypes.string.isRequired,
            noseImage: PropTypes.string.isRequired,
            hairImage: PropTypes.string.isRequired,
            eyesImage: PropTypes.string.isRequired,
            accessoryImage: PropTypes.string.isRequired,
            mouthImage: PropTypes.string.isRequired,

        }).isRequired,
    };

    return AlpacaPartWrapper;
};



const AlpacaBackground = withAlpacaPart(AlpacaPart, "background");
const AlpacaEars = withAlpacaPart(AlpacaPart, 'ears');
const AlpacaNeck = withAlpacaPart(AlpacaPart, 'neck');
const AlpacaLeg = withAlpacaPart(AlpacaPart, 'legs');
const AlpacaNose = withAlpacaPart(AlpacaPart, 'nose');
const AlpacaHair = withAlpacaPart(AlpacaPart, 'hair');
const AlpacaEyes = withAlpacaPart(AlpacaPart, 'eyes');
const AlpacaAccesory = withAlpacaPart(AlpacaPart, 'accessory');
const AlpacaMouth = withAlpacaPart(AlpacaPart, 'mouth');

const AlpacaProfile = ({ alpacaBody }) => {
    return (
        <div className="alpaca-Profile">
            <AlpacaBackground alpacaBody={alpacaBody} />
            <AlpacaEars alpacaBody={alpacaBody} />
            <AlpacaNeck alpacaBody={alpacaBody} />
            <AlpacaLeg alpacaBody={alpacaBody} />
            <AlpacaNose alpacaBody={alpacaBody} />
            <AlpacaHair alpacaBody={alpacaBody} />
            <AlpacaEyes alpacaBody={alpacaBody} />
            <AlpacaAccesory alpacaBody={alpacaBody} />
            <AlpacaMouth alpacaBody={alpacaBody} />
        </div>
    );
};


AlpacaProfile.propTypes = {
    alpacaBody: PropTypes.object.isRequired,
};



export default AlpacaProfile;