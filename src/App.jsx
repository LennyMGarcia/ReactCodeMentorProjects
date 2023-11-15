/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import './components/alpacaProfile'

import AlpacaProfile from './components/alpacaProfile.jsx'
import AccesorizeAlpaca from './components/AccessoriceAlpaca.jsx'

import AlpacaEarsStyle from './components/AlpacaBodyComponents/AlpacaEarsStyle.jsx'
import AlpacaAccessoriesStyle from './components/AlpacaBodyComponents/AlpacaAccessoriesStyle.jsx'
import AlpacaHairStyle from './components/AlpacaBodyComponents/AlpacaHairStyle.jsx'

import Gallery from './AlpacaGallery.js'



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
    neckButton: () => console.log('neck enable'),
    backgroundButton: () => console.log('background enable'),
    eyesButton: () => console.log('eyes enable'),
    legButton: () => console.log('leg enable'),
    mouthButton: () => console.log('mouth enable'),
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
            {componentVisible == 'ACCESSORIES' && <AlpacaAccessoriesStyle buttonFunctions={alpacaAccessoriesButtonFunctions} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
