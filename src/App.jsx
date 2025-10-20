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
      <div className="min-h-dvh z-50 overflow-hidden relative bg-red"></div>
    </>
  )
}

export default App
