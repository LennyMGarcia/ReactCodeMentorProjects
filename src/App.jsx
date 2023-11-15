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

import Gallery from './AlpacaGallery.js'
import AlpacaLegStyle from './components/AlpacaBodyComponents/AlpacaLegStyle.jsx'
import AlpacaMouthStyle from './components/AlpacaBodyComponents/AlpacaMouthStyle.jsx'
import AlpacaEyesStyle from './components/AlpacaBodyComponents/AlpacaEyesStyle.jsx'
import AlpacaBackgroundStyle from './components/AlpacaBodyComponents/AlpacaBackgroundSyle.jsx'




function App() {

  const [componentVisible, setComponentVisible] = useState(null)

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

  const buttonAccessoriesFunctions = {
    earsButton: () => setComponentVisible('EARS'),
    accesoryButton: () => setComponentVisible("ACCESSORIES"),
    neckButton: () => setComponentVisible('NECK'),
    backgroundButton: () => setComponentVisible('BACKGROUND'),
    eyesButton: () => setComponentVisible('EYES'),
    legButton: () => setComponentVisible('LEG'),
    mouthButton: () => setComponentVisible('MOUTH'),
    hairButton: () => setComponentVisible('HAIR'),
  }

  const alpacaEarsButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      earsImage: Gallery.ears.default
    })),

    tiltBackwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      earsImage: Gallery.ears.tiltBackward
    })),

    tiltForwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      earsImage: Gallery.ears.tiltForward
    })),
  }

  const alpacaAccessoriesButtonFunctions = {
    earingsButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      accessoryImage: Gallery.accessories.earings
    })),

    flowerButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      accessoryImage: Gallery.accessories.flower
    })),

    glassesButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      accessoryImage: Gallery.accessories.glasses
    })),

    headphoneButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      accessoryImage: Gallery.accessories.headphone
    })),
  }

  const alpacaHairButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.default
    })),

    bangButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.bang
    })),

    curlsButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.curls
    })),

    elegantButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.elegant
    })),

    fancyButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.fancy
    })),

    quiffButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.quiff
    })),

    shortButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      hairImage: Gallery.hair.short
    })),

    
  }

  const alpacaNeckButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      neckImage: Gallery.neck.default
    })),

    bendBackwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      neckImage: Gallery.neck.bendBackward
    })),

    bendForwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      neckImage: Gallery.neck.bendForward
    })),

    thickButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      neckImage: Gallery.neck.thick
    })),

  }

  const alpacaLegButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.default
    })),

    tiltBackwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.tiltBackward
    })),

    tiltForwardButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.tiltForward
    })),

    cookieButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.cookie
    })),

    bubbleTeaButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.bubbleTea
    })),

    gameConsoleButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      legsImage: Gallery.legs.gameConsole
    })),

  }

  const alpacaMouthButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      mouthImage: Gallery.mouth.default
    })),

    astonishedButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      mouthImage: Gallery.mouth.astonished
    })),

    eatingButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      mouthImage: Gallery.mouth.eating
    })),

    laughButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      mouthImage: Gallery.mouth.laugh
    })),

    tongueButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      mouthImage: Gallery.mouth.tongue
    })),

  }

  const alpacaEyesButtonFunctions = {
    defaultButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.default
    })),

    angryButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.angry
    })),

    naughtyButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.naughty
    })),

    pandaButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.panda
    })),

    smartButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.smart
    })),

    starButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      eyesImage: Gallery.eyes.star
    })),
  }

  const alpacaBackgroundButtonFunctions = {
    blueButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.blue
    })),

    darkblueButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.darkBlue
    })),

    greenButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.green
    })),

    greyButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.grey
    })),

    redButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.red
    })),

    yellowButton: () => setAlpacaBodyImage((prevState) => ({
      ...prevState,
      backgroundImage: Gallery.backgrounds.yellow
    })),


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
            {componentVisible == 'EARS' && <AlpacaEarsStyle buttonFunctions={alpacaEarsButtonFunctions} />}
            {componentVisible == 'HAIR' && <AlpacaHairStyle buttonFunctions={alpacaHairButtonFunctions} />}
            {componentVisible == 'NECK' && <AlpacaNeckStyle buttonFunctions={alpacaNeckButtonFunctions} />}
            {componentVisible == 'LEG' && <AlpacaLegStyle buttonFunctions={alpacaLegButtonFunctions} />}
            {componentVisible == 'MOUTH' && <AlpacaMouthStyle buttonFunctions={alpacaMouthButtonFunctions} />}
            {componentVisible == 'EYES' && <AlpacaEyesStyle buttonFunctions={alpacaEyesButtonFunctions} />}
            {componentVisible == 'BACKGROUND' && <AlpacaBackgroundStyle buttonFunctions={alpacaBackgroundButtonFunctions} />}
            {componentVisible == 'ACCESSORIES' && <AlpacaAccessoriesStyle buttonFunctions={alpacaAccessoriesButtonFunctions} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
