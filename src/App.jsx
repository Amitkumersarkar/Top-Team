import './App.css'
import Available from './Components/Available/Available'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import Navbar from './components/header/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Selected from './Components/Selected/Selected'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div>
        <HeroSection></HeroSection>
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
