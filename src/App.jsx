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

  // adding toggle features
  const [isActive, setIsActive] = useState({
    Available: true,
    status: "active"
  })

  //declared event handler for all players
  const handleIsActive = (status) => {
    if (status == "Available") {

      setIsActive({
        Available: true,
        status: "Available"
      })
    }
    else {
      setIsActive({
        Available: false,
        status: "Selected"
      })
    }
  }
  return (
    <>
      <Navbar coins={coins} ></Navbar>
      <div>
        <HeroSection handleAddCoins={handleAddCoins}></HeroSection>
      </div>
      <div className='w-11/12 mx-auto flex justify-between items-center p-7'>
        <AvailablePlayers isActive={isActive} handleIsActive={handleIsActive}></AvailablePlayers>
        <div className='flex gap-5'>
          <Available></Available>
          <Selected></Selected>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
