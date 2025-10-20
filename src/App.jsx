import { ScrollTrigger } from "gsap/all"
import Navbar from "./Components/Navbar"
import Hero from "./Sections/Hero"
import gsap from "gsap"
import Texts from "./Sections/Texts"

gsap.registerPlugin(ScrollTrigger)


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Texts/>
    </>
  )
}

export default App
