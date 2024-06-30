import { FaReact, FaHtml5, FaCss3, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {  motion } from "framer-motion" 

const Skills = ()=>{

    const icons = (duration) =>( {
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
    })

     return(
        <>
        <div id="skills" className="border-b border-neutral-700 pb-12 w-4/5 mx-auto  my-10">
            <h2 className="lg:text-5xl text-4xl text-center pb-20">Technologies</h2>
            <div className="flex flex-wrap  justify-center items-center gap-4 lg:my-12 ">
                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-cyan-400 cursor-pointer"
                variants={icons(2.5)}
                initial="initial"
                animate="animate"
                 ><FaReact /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-[#ff3dcf] cursor-pointer "
                variants={icons(3.5)}
                initial="initial"
                animate="animate"  
                ><TbBrandFramerMotion  /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-amber-400 font-semibold cursor-pointer"
                 variants={icons(2.5)}
                 initial="initial"
                 animate="animate" 
                ><IoLogoJavascript /> </motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-teal-300 cursor-pointer "
                 variants={icons(3.5)}
                 initial="initial"
                 animate="animate" 
                ><RiTailwindCssFill /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-orange-500 cursor-pointer "
                 variants={icons(2.5)}
                 initial="initial"
                 animate="animate" 
                ><FaHtml5 /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-cyan-300 cursor-pointer  "
                 variants={icons(3.5)}
                 initial="initial"
                 animate="animate" 
                ><FaCss3 /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-slate-200  cursor-pointer "
                 variants={icons(2.5)}
                 initial="initial"
                 animate="animate" 
                ><FaGithub /></motion.div>

                <motion.div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-red-600 cursor-pointer "
                 variants={icons(2.7)}
                 initial="initial"
                 animate="animate" 
                ><FaGitAlt /></motion.div>

            </div>
        </div>
        
       
        </>
     )
}

export default Skills