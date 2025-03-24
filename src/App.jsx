import { useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import Navbar from './components/header/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Selected from './Components/Selected/Selected'

function App() {

  // state declaration for navbar
  const [coins, setCoins] = useState(0);

  // event handler for navbar
  const handleAddCoins = (coin) => {
    setCoins(coins + coin);
  }

  return (
    <>
      <Navbar coins={coins} ></Navbar>
      <div>
        <HeroSection handleAddCoins={handleAddCoins}></HeroSection>
      </div>
      <div>
        <AvailablePlayers></AvailablePlayers>
        <div>
          <Available></Available>
          <Selected></Selected>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
