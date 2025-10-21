import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import Navbar from "./Components/Navbar"
import Hero from "./Sections/Hero"
import gsap from "gsap"
import Texts from "./Sections/Texts"
import Flavors from "./Sections/Flavors"
import { useGSAP } from "@gsap/react"
import Nutrition from "./Sections/Nutrition"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Texts />
          <Flavors />
          <Nutrition/>
          <div className="min-h-dvh z-50 overflow-hidden relative bg-red"></div>
        </div>
      </div>
    </>
  )
}

export default App
