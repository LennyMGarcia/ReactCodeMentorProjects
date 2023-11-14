/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import './components/alpacaProfile'
import AlpacaProfile from './components/alpacaProfile.jsx'
import AccesorizeAlpaca from './components/AccessoriceAlpaca.jsx'

function App() {

  const buttonList = {
    backgroundButton: console.log('background enable'),
    earsButton: console.log('ears enable'),
    neckButton: console.log('neck enable'),
    accesoryButton: console.log('accesory enable'),
    eyesButton: console.log('eyes enable'),
    legButton: console.log('leg enable'),
    mouthButton: console.log('mouth enable'),
    hairButton: console.log('hair enable'),
  }


  return (
    <>
      <h1>ALPACA GENERATOR</h1>
      <div className='grid-container'>
        <AlpacaProfile className='alpaca-container' />
        <div className='styling-buttom-container'>
          <h3>ACCESSORIZE THE ALPACA</h3>
          <AccesorizeAlpaca buttonList={buttonList} className='Accesorize-container' />
          <div className='style-container'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
