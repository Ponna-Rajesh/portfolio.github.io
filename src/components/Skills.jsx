import { FaReact, FaHtml5, FaCss3, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = ()=>{
     return(
        <>
        <div id="skills" className="border-b border-neutral-700 pb-12 w-4/5 mx-auto  my-10">
            <h2 className="lg:text-5xl text-4xl text-center pb-20">Technologies</h2>
            <div className="flex flex-wrap  justify-center items-center gap-4 lg:my-12 ">
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-cyan-400 cursor-pointer" ><FaReact /></div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-amber-400 font-semibold cursor-pointer">JS</div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-teal-300 cursor-pointer "><RiTailwindCssFill /></div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-orange-500 cursor-pointer "><FaHtml5 /></div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-cyan-300 cursor-pointer  "><FaCss3 /></div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-slate-200  cursor-pointer "><FaGithub /></div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4 text-7xl text-red-600 cursor-pointer "><FaGitAlt /></div>
            </div>
        </div>
        
       
        </>
     )
}

export default Skills