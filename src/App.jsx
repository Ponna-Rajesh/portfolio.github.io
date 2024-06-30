import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState } from "react"
import { motion, useScroll} from "framer-motion";



function App() {


  const [lightDark, setLightDark] = useState()
  function getData(data){
      console.log(data)
      setLightDark(data)
  }

  const { scrollYProgress } = useScroll();

  return (
    <>
   <motion.div  style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-[#ff0055] origin-left " />
    <div className={`${lightDark ? 'bg-white text-black' : 'bg-zinc-900  text-white'  }`}>
        <div className=" max-w-7xl mx-auto">
          <Navbar getData={getData}/>
          <Home />
          <Skills />
          <Projects />
          <Contact />
       </div>
       <Footer />
    </div>
    
     
    </>
  )
}

export default App
