import { ScrollTrigger } from "gsap/all"
import Navbar from "./Components/Navbar"
import Hero from "./Sections/Hero"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="min-h-dvh z-20 bg-red"></div>
    </>
  )
}

export default App
