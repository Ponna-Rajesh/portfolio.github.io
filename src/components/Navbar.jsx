import { useState } from "react"
import { MdModeNight } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";
import { delay, motion } from "framer-motion"


const Navbar = (props) =>{
    const [mode, setmode] = useState(true)
    const [showMenu, setShowMneu] = useState(false)

    function toggleBtn(){
        setShowMneu(!showMenu)
    }

    function lightMood(){
        setmode(!mode)
        props.getData(mode)
    }


    return(
        <>
            <nav className="py-4 px-6 lg:px-0  flex justify-between items-center lg:py-8 lg:w-5/6 mx-auto"> 
                <div className=" text-3xl lg:text-5xl lg:mr-12 w-6/6">RAJESH <span className="text-lime-500">PONNA</span></div>

                <ul id="menu-items" className={`lg:flex  lg:block hidden`} >
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 "><a href="#about">About</a></li>
                    <li  className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600"><a href="#skills">Skills</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 "><a href="#projects">Projects</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 "><a href="#contact">Contact</a></li>
                </ul>

               
                    <div className={`text-2xl cursor-pointer ${mode ? 'block' : 'hidden'}`}  onClick={lightMood}><MdModeNight /></div>
                    <div className={`text-2xl cursor-pointer ${mode ? 'hidden' : 'block'} `} onClick={lightMood}><LuSunMedium /></div>
              

                <button  className={`lg:hidden text-5xl  ${showMenu ? 'hidden' : false}`} onClick={toggleBtn} >☰</button>
                 
                <button  className={`lg:hidden text-gray-500  text-5xl ${showMenu ? 'block' : 'hidden'}`} onClick={toggleBtn}>x</button>
            </nav>
            <div className= {`py-4 px-5  ${showMenu ? 'block' : 'hidden'}`} >
            <ul id="menu-items" className={` block  ${showMenu ? 'block' : 'lg:hidden'}`}>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2 "><a href="#about">About</a></li> 
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="#skills">Skills</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="#projects">Projects</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
        
        
    )
}

export default Navbar