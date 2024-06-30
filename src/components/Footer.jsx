import { FaLinkedin, FaInstagram } from "react-icons/fa";
import {delay, motion} from "framer-motion"

const Footer = () => {
    return(
        <>
            <div className="bg-lime-600  text-white text-center py-10 ">
                <p className="text-2xl mb-8 font-bold">Rajesh</p>
                    <a href="#about"> <span className="mr-5 text-xl cursor-pointer">About</span></a>
                    <a href="#projects"> <span className="mr-5 text-xl cursor-pointer">Projects</span></a>
                <div className="flex justify-center items-center text-gray-950 text-3xl mt-6">
                  
                   <a href="https://www.linkedin.com/in/ponna-rajesh-8229302a8/"><FaLinkedin className="mr-5 cursor-pointer"/></a>
                   <a href="https://www.instagram.com/javascript_for_us/"><FaInstagram className="text-3xl cursor-pointer"/></a>
                </div>
                <motion.h1 className="mt-5 px-10 text-gray-950"
                initial={{y: -100, opacity:1}}
                whileInView={{y:[0, 10], opacity:1}}
                transition={{ repeat: Infinity,  repeatType: "reverse", delay:0.5,  duration:0.8}}

                >"Thanks for exploring my portfolio❤️. I’d love to hear your thoughts on my work!"</motion.h1>
                

            </div>
        </>

    )
}

export default Footer