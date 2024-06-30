import raj from "../img/raj.jpeg"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import resume from "../img/RAJESH.pdf"
import { useContext, useState } from "react";
import { animate, delay, motion } from "framer-motion" 

const Home = () =>{

    const [ downloadCV, setDownloadCV] = useState(false)

    function downloadClick(){
        const dta = confirm("Would you like to Dowload the resume ?")
        setDownloadCV(dta)
    }

    const abc = (delay) => ({
        hidden: {x: -70, opacity: 0},
        visible:{
            x: 0,
            opacity: 1,
            transition: {duration: 0.5, delay: delay}
        }

    })


    return(
        <>

         <section id="about" className=" lg:h-screen flex justify-between items-center max-w-7xl mx-auto lg:px-28 lg:py-28 py-20 px-10"> 
            <div className="">
                <motion.h1 className="text-6xl  font-extrabold mb-5" 
                variants ={abc(0)}
                initial="hidden"
                whileInView="visible"
                >Hi, It's <span className=" text-lime-500">Rajesh</span></motion.h1>

                <motion.h2 className="text-3xl font-bold my-3"
                    variants ={abc(0.5)}
                    initial="hidden"
                    whileInView="visible"
                >I'm a <span className=" text-lime-500">Frontend Developer</span></motion.h2>

                <motion.p
                variants ={abc(0.8)}
                initial="hidden"
                whileInView="visible"
                >As a Frontend Developer, I specialize in creating dynamic, responsive, and user-friendly web applications. I have strong command of React.js, enabling me to build complex and interactive web apps that provide exceptional user experiences. </motion.p>

                <div className="flex"> 
                <motion.div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center" 
                variants ={abc(1.3)}
                initial="hidden"
                whileInView="visible"
                ><a href="https://www.linkedin.com/in/ponna-rajesh-8229302a8/"><FaLinkedin className="text-3xl cursor-pointer"/></a></motion.div>

                    <motion.div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center"
                variants ={abc(1.4)}
                initial="hidden"
                whileInView="visible"
                    ><a href="https://github.com/Ponna-Rajesh"><FaGithub className="text-3xl cursor-pointer"/></a></motion.div>

                    <motion.div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center"
                variants ={abc(1.3)}
                initial="hidden"
                whileInView="visible"
                    ><a href="https://www.instagram.com/javascript_for_us/"><FaInstagram className="text-3xl cursor-pointer"/></a></motion.div>

                    <motion.div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center"
                    variants ={abc(1.2)}
                    initial="hidden"
                    whileInView="visible"
                    ><a href="#contact"><MdEmail className="text-3xl cursor-pointer"/></a></motion.div>
                   
                </div>

                <motion.div className="mt-4" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:1.7, duration:1.25}}>
                <a onClick={downloadClick} href={downloadCV ? resume : null} download="Resume">
                         <button className="bg-lime-500 p-3 rounded-full w-24 shadow-xl shadow-gray-700 font-bold mr-3 hover:bg-lime-300 text-gray-950" >Resume</button>
                    </a>
                    <button  className="border-solid border-2 border-lime-400 p-3 rounded-full w-28 font-bold mr-3"><a href="#contact">Contact</a></button>
                </motion.div>
            </div>
            
            <motion.img  className="lg:block rounded-full w-5/12 shadow-xl shadow-gray-700 object-cover ml-20 hidden" 
            initial={{x:100, opacity: 0}} whileInView={{x: 0, opacity:1}} transition={{delay: 0.5, duration:1 }} src={raj} alt="rajesh" />    
            
        </section>

            
        </>
       
        
    )
}

export default Home