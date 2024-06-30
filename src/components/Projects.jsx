import Flixx from "../img/flixx.png"
import uhost from "../img/uHost.png"
import Todo from "../img/Todo.png"
import Quiz from "../img/Quiz.png"
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";


const Projects = () =>{

    
    return(
        <>
        <div id="projects" className="border-b border-neutral-700 pb-12 w-4/5 mx-auto text-white mt-10">
            <motion.h2 className="lg:text-5xl text-4xl text-center pb-20"
            whileInView ={{y:0, opacity: 1}}
            initial={{y:-100, opacity: 0}}
            transitiom={{duration: 2, delay: 1}}
            >Projects</motion.h2>
            <div className="">

                <motion.div className="lg:flex lg:justify-between lg:items-center mb-10 lg:p-0 lg:border-none lg:p-5 p-8 border border-lime-400 bg-lime-600 rounded-xl "

                whileInView={{x: 0, opacity:1}}
                initial={{x: -100, opacity:0}}
                transition={{duration: 0.5}}
            
                >
                    <div className="lg:w-3/6 flex justify-center">
                        <img className="cursor-pointer lg:ml-7 " src={Flixx} alt="proj1" /> 
                    </div>
                    <div className="lg:w-4/6 lg:ml-24">
                    <p className="my-7 select-none">Developed responsive movie app with HTML, CSS, JS—boosted engagement 20%. Integrated TMDB API, cut load time 15%. Enhanced UX, reduced bounce rate 25%. Collaborated for 30% faster feature releases</p>
                    <div className="flex select-none">  
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">HTML</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">CSS</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">JS</div> 
                    </div>
                    <div className="my-4 ml-2 flex">
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://github.com/Ponna-Rajesh/flixx.github.io"><FaGithub className="text-3xl text-gray-950 cursor-pointer"/></a></div> 
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://flixx-movies-and-tvshows.netlify.app/"><TbWorld className="text-3xl text-gray-950 cursor-pointer cursor-pointer"/></a></div> 
                    </div> 
                    </div>
                </motion.div>

                <motion.div className="lg:flex lg:justify-between lg:items-center mb-10 lg:p-0 lg:border-none lg:p-5 p-8 border border-lime-400 bg-violet-600 rounded-xl "
                 whileInView={{x: 0, opacity:1}}
                 initial={{x: 100, opacity:0}}
                 transition={{duration: 0.5}}
                >
                    <div className="lg:w-3/6 flex justify-center">
                        <img className="cursor-pointer lg:ml-7 " src={Todo} alt="proj1" /> 
                    </div>
                    <div className="lg:w-4/6 lg:ml-24">
                    <p className="my-7 select-none"> Created a responsive todo app using HTML, CSS, and JavaScript, boosting productivity with local storage for data persistence. Integrated intuitive design for user-friendly navigation and efficient task management.</p>
                    
                    <div className="flex select-none">  
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">HTML</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">CSS</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">JS</div> 
                    </div>
                    <div className="my-4 ml-2 flex">
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://github.com/Ponna-Rajesh/Shopping-List_Project.github.io"><FaGithub className="text-3xl text-gray-950 cursor-pointer"/></a></div> 
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://ponna-rajesh.github.io/Shopping-List_Project.github.io/"><TbWorld className="text-3xl text-gray-950 cursor-pointer cursor-pointer"/></a></div> 
                    </div> 
                    </div>
                </motion.div>

                <motion.div className="lg:flex lg:justify-between lg:items-center mb-10 lg:p-0 lg:border-none lg:p-5 p-8 border border-lime-400 bg-lime-600 rounded-xl "
                whileInView={{x: 0, opacity:1}}
                initial={{x: -100, opacity:0}}
                transition={{duration: 0.5}}>
                    <div className="lg:w-3/6 flex justify-center">
                        <img className="cursor-pointer lg:ml-7  " src={uhost} alt="proj1" /> 
                    </div>
                    <div className="lg:w-4/6 lg:ml-24">
                    <p className="my-7 select-none">Led creation of responsive web hosting page, boosting conversions by 40%. Used HTML, CSS, JavaScript for user-friendly interface, cutting bounce rates 30%. Applied responsive design for 25% more mobile traffic. Ensured bug-free launch with thorough testing.</p>
                    <div className="flex select-none">  
                    <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">HTML</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">CSS</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">JS</div> 
                    </div>
                    <div className="my-4 ml-2 flex">
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://github.com/Ponna-Rajesh/uhost.github.io"><FaGithub className="text-3xl text-gray-950 cursor-pointer"/></a></div> 
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://ponna-rajesh.github.io/uhost.github.io/index.html"><TbWorld className="text-3xl text-gray-950 cursor-pointer cursor-pointer"/></a></div> 
                    </div> 
                    </div>
                </motion.div>

                <motion.div className="lg:flex lg:justify-between lg:items-center mb-10 lg:p-0 lg:border-none lg:p-5 p-8 border border-lime-400 bg-violet-600 rounded-xl "
                 whileInView={{x: 0, opacity:1}}
                initial={{x: 100, opacity:0}}
                transition={{duration: 0.5}}
                >
                    <div className="lg:w-3/6 flex justify-center">
                        <img className="cursor-pointer lg:ml-7 " src={Quiz} alt="proj1" /> 
                    </div>
                    <div className="lg:w-4/6 lg:ml-24">
                    <p className="my-7 select-none ">I created a dynamic quiz app with 15-second timed questions using HTML, CSS, and JavaScript. It includes interactive, responsive elements for an engaging user experience.</p>
                    <div className="flex select-none">  
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">HTML</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">CSS</div>
                        <div className="border border-3 border-red-300 py-2 my-auto mr-5 w-20 h-10 text-center font-bold">JS</div> 
                    </div>
                    <div className="my-4 ml-2 flex">
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://github.com/Ponna-Rajesh/quiz.github.io"><FaGithub className="text-3xl text-gray-950 cursor-pointer"/></a></div> 
                            <div className="w-7 h-7 mt-5 mr-4 border-solid border-2 border-gray-900 rounded-full flex justify-center items-center"><a href="https://ponna-rajesh.github.io/quiz.github.io/"><TbWorld className="text-3xl text-gray-950 cursor-pointer cursor-pointer"/></a></div> 
                    </div> 
                    </div>
                </motion.div>

            </div>
        </div>

        </>
    )
}
export default Projects