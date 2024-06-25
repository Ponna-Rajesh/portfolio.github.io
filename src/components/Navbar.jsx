import { useState } from "react"

const Navbar = () =>{

    const [showMenu, setShowMneu] = useState(false)
    function toggleBtn(){
        setShowMneu(!showMenu)
    }
    return(
        <>
            <nav className="py-4 px-6 lg:px-0 bg-zinc-900  text-white  flex justify-between items-center lg:py-8 lg:w-5/6 mx-auto"> 
                <div className=" text-3xl lg:text-5xl lg:mr-12 w-6/6">RAJESH <span className="text-lime-500">PONNA</span></div>
                <ul id="menu-items" className={`lg:flex  lg:block hidden`}>
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 "><a href="#about">About</a></li>
                    <li  className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600"><a href="#skills">Skills</a></li>
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 ">Projects</li>
                    <li className="px-6 text-xl cursor-pointer hover:border-b-4 border-solid border-lime-600 ">Contact</li>
                </ul>
                <button  className={`lg:hidden text-5xl ${showMenu ? 'hidden' : false}`} onClick={toggleBtn} >☰</button>
                <button  className={`lg:hidden text-white  text-5xl ${showMenu ? 'block' : 'hidden'}`} onClick={toggleBtn}>x</button>
            </nav>
            <div className= {`py-4 px-5 bg-zinc-900 ${showMenu ? 'block' : 'hidden'}`} >
            <ul id="menu-items" className={` text-white block ${showMenu ? 'block' : 'lg:hidden'}`}>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2">Projects</li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2">Skills</li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2 ">About</li>
                    <li className="px-6 text-xl cursor-pointer hover:text-2xl my-2">Contact</li>
                </ul>
            </div>
        </>
        
        
    )
}

export default Navbar