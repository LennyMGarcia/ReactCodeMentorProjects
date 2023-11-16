/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import './components/alpacaProfile'

import AlpacaProfile from './components/alpacaProfile.jsx'
import AccesorizeAlpaca from './components/AccessoriceAlpaca.jsx'

import AlpacaEarsStyle from './components/AlpacaBodyComponents/AlpacaEarsStyle.jsx'
import AlpacaAccessoriesStyle from './components/AlpacaBodyComponents/AlpacaAccessoriesStyle.jsx'
import AlpacaHairStyle from './components/AlpacaBodyComponents/AlpacaHairStyle.jsx'
import AlpacaNeckStyle from './components/AlpacaBodyComponents/AlpacaNeckStyle.jsx'
import AlpacaLegStyle from './components/AlpacaBodyComponents/AlpacaLegStyle.jsx'
import AlpacaMouthStyle from './components/AlpacaBodyComponents/AlpacaMouthStyle.jsx'
import AlpacaEyesStyle from './components/AlpacaBodyComponents/AlpacaEyesStyle.jsx'
import AlpacaBackgroundStyle from './components/AlpacaBodyComponents/AlpacaBackgroundSyle.jsx'

import Gallery from './AlpacaGallery.js'

function App() {

  const [alpacaBodyImage, setAlpacaBodyImage] = useState({
    accessoryImage: Gallery.accessories.flower,
    backgroundImage: Gallery.backgrounds.blue,
    earsImage: Gallery.ears.default,
    eyesImage: Gallery.eyes.default,
    hairImage: Gallery.hair.default,
    legsImage: Gallery.legs.default,
    mouthImage: Gallery.mouth.default,
    neckImage: Gallery.neck.default,
    noseImage: Gallery.nose.default,
  });

  const alpacaBIPropertiesNames = {
    accessory: 'accessoryImage',
    background: 'backgroundImage',
    ears: 'earsImage',
    eyes: 'eyesImage',
    hair: 'hairImage',
    legs: 'legsImage',
    mouth: 'mouthImage',
    neck: 'neckImage',
    nose: 'noseImage',
  }

  const handleBodyImageState = (Name, image) => {
    setAlpacaBodyImage((prevState) => ({
      ...prevState,
      [Name]: image
    }))
  }

  const alpacaEarsButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.ears, Gallery.ears.default),
    tiltBackwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.ears, Gallery.ears.tiltBackward),
    tiltForwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.ears, Gallery.ears.tiltForward),
  }

  const alpacaAccessoriesButtonFunctions = {
    earingsButton: () => handleBodyImageState(alpacaBIPropertiesNames.accessory, Gallery.accessories.earings),
    flowerButton: () => handleBodyImageState(alpacaBIPropertiesNames.accessory, Gallery.accessories.flower),
    glassesButton: () => handleBodyImageState(alpacaBIPropertiesNames.accessory, Gallery.accessories.glasses),
    headphoneButton: () => handleBodyImageState(alpacaBIPropertiesNames.accessory, Gallery.accessories.headphone),
  }

  const alpacaHairButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.default),
    bangButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.bang),
    curlsButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.curls),
    elegantButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.elegant),
    fancyButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.fancy),
    quiffButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.quiff),
    shortButton: () => handleBodyImageState(alpacaBIPropertiesNames.hair, Gallery.hair.short),
  }

  const alpacaNeckButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.neck, Gallery.neck.default),
    bendBackwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.neck, Gallery.neck.bendBackward),
    bendForwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.neck, Gallery.neck.bendForward),
    thickButton: () => handleBodyImageState(alpacaBIPropertiesNames.neck, Gallery.neck.thick),
  }

  const alpacaLegButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.default),
    tiltBackwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.tiltBackward),
    tiltForwardButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.tiltForward),
    cookieButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.cookie),
    bubbleTeaButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.bubbleTea),
    gameConsoleButton: () => handleBodyImageState(alpacaBIPropertiesNames.legs, Gallery.legs.gameConsole),
  }

  const alpacaMouthButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.mouth, Gallery.mouth.default),
    astonishedButton: () => handleBodyImageState(alpacaBIPropertiesNames.mouth, Gallery.mouth.astonished),
    eatingButton: () => handleBodyImageState(alpacaBIPropertiesNames.mouth, Gallery.mouth.eating),
    laughButton: () => handleBodyImageState(alpacaBIPropertiesNames.mouth, Gallery.mouth.laugh),
    tongueButton: () => handleBodyImageState(alpacaBIPropertiesNames.mouth, Gallery.mouth.tongue),
  }

  const alpacaEyesButtonFunctions = {
    defaultButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.default),
    angryButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.angry),
    naughtyButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.naughty),
    pandaButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.panda),
    smartButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.smart),
    starButton: () => handleBodyImageState(alpacaBIPropertiesNames.eyes, Gallery.eyes.star),
  }

  const alpacaBackgroundButtonFunctions = {
    blueButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.blue),
    darkblueButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.darkBlue),
    greenButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.green),
    greyButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.grey),
    redButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.red),
    yellowButton: () => handleBodyImageState(alpacaBIPropertiesNames.background, Gallery.backgrounds.yellow),
  }

  const [componentVisible, setComponentVisible] = useState('')

  const alpacaComponents = {
    EARS: <AlpacaEarsStyle buttonFunctions={alpacaEarsButtonFunctions}/>,
    ACCESSORIES: <AlpacaAccessoriesStyle buttonFunctions={alpacaAccessoriesButtonFunctions}/>,
    NECK: <AlpacaNeckStyle buttonFunctions={alpacaNeckButtonFunctions}/>,
    BACKGROUND: <AlpacaBackgroundStyle buttonFunctions={alpacaBackgroundButtonFunctions}/>,
    EYES: <AlpacaEyesStyle buttonFunctions={alpacaEyesButtonFunctions}/>,
    LEG:  <AlpacaLegStyle buttonFunctions={alpacaLegButtonFunctions}/>,
    MOUTH: <AlpacaMouthStyle buttonFunctions={alpacaMouthButtonFunctions}/>,
    HAIR: <AlpacaHairStyle buttonFunctions={alpacaHairButtonFunctions}/>,
  }

  const handleComponentChange = (component) =>{
    setComponentVisible(component)
  }

  const buttonAccessoriesFunctions = {
    earsButton: () => handleComponentChange('EARS'),
    accesoryButton: () => handleComponentChange("ACCESSORIES"),
    neckButton: () => handleComponentChange('NECK'),
    backgroundButton: () => handleComponentChange('BACKGROUND'),
    eyesButton: () => handleComponentChange('EYES'),
    legButton: () => handleComponentChange('LEG'),
    mouthButton: () => handleComponentChange('MOUTH'),
    hairButton: () => handleComponentChange('HAIR'),
  }

  return (
    <>
      <h1>ALPACA GENERATOR</h1>
      <div className='grid-container'>
        <AlpacaProfile alpacaBody={alpacaBodyImage} className='alpaca-container' />
        <div className='styling-buttom-container'>
          <h3>ACCESSORIZE THE ALPACA</h3>
          <AccesorizeAlpaca buttonFunctions={buttonAccessoriesFunctions} className='Accesorize-container' />
          <div className='style-container'>
            <h3>STYLE</h3>
            <br /><br />
            {alpacaComponents[componentVisible]}
            <p>.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
