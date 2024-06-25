import raj from "../img/raj.jpeg"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = () =>{
    return(
        <>

         <section id="about" className=" bg-zinc-900 text-white lg:h-screen flex justify-between items-center max-w-7xl mx-auto lg:px-28 lg:py-28 py-20 px-10"> 
            <div className="">
                <h1 className="text-6xl  font-extrabold mb-5">Hi, It's <span className=" text-lime-500">Rajesh</span></h1>
                <h2 className="text-3xl font-bold my-3">I'm a <span className=" text-lime-500">Frontend Developer</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium exercitationem, officiis itaque odit odio in! Ipsum amet iste aliquam illum deserunt impedit </p>
                <div className="flex"> 
                    <div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center"><FaLinkedin className="text-3xl cursor-pointer"/></div>
                    <div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-green-600 rounded-full flex justify-center items-center"><FaGithub className="text-3xl cursor-pointer"/></div>
                    <div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-lime-600 rounded-full flex justify-center items-center"><FaInstagram className="text-3xl cursor-pointer"/></div>
                    <div className="w-12 h-12 mt-5 mr-4 border-solid border-2 border-green-600 rounded-full flex justify-center items-center"><FaXTwitter className="text-3xl cursor-pointer"/></div>
                </div>
                <div className="mt-4">
                    <button className="bg-lime-500 p-3 rounded-full w-24 shadow-xl shadow-gray-700 font-bold mr-3 hover:bg-lime-300 text-gray-950">Hire CV</button>
                    <button  className="border-solid border-2 border-lime-400 p-3 rounded-full w-28 font-bold mr-3">Contact</button>
                </div>
            </div>
            
            <img  className="lg:block rounded-full w-5/12 shadow-xl shadow-gray-700 object-cover ml-20 hidden" src={raj} alt="rajesh" />    
            
        </section>
        </>
       
        
    )
}

export default Home