import Swal from 'sweetalert2'
import {delay, motion} from "framer-motion"
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "971d2e6a-0dde-4e5c-a00a-af162e151a0f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully😍",
        icon: "success"
      });
      document.querySelectorAll('input').forEach(input => input.value = "");
      document.querySelectorAll('textarea').forEach(input => input.value = "");
    }
   
  };

    return(
        <>
        
        <div id="contact"  className="border-b border-neutral-700 pb-12 w-4/5 mx-auto mt-10">
            <motion.p className="text-center mb-2 text-gray-400"
             whileInView ={{y:0, opacity: 1}}
             initial={{y:-100, opacity: 0}}
             transitiom={{duration: 2, delay: 1.5}}>Get in touch</motion.p>
            <h2 className="lg:text-5xl text-4xl text-center pb-20">Contact Me</h2>

            <div className="lg:flex justify-between items-center ">


                <div className="lg:w-3/6 lg:m-5 mb-28  "> 
                  <motion.h1 className="text-center mb-8 text-2xl"
                  whileInView={{x: 0, opacity:1}}
                  initial={{x: -100, opacity:0}}
                  transition={{duration: 0.5}}
                  >Talk to me</motion.h1>
                  <div className="w-5/6 bg-zinc-800 p-10 mx-auto text-center text-white rounded-md">
                    <p>Email</p>
                    <p className="text-gray-400 ">rajeshponna78@gmail.com</p>
                    <a href="mailto:rajeshponna78@gmail.com"><p className="mt-4 cursor-pointer">Ping me <span>▶️</span></p></a>
                  </div>

                  <div className="w-5/6 bg-zinc-800 text-white p-10 mx-auto my-4 text-center rounded-md">
                    <p>Linkedin</p>
                    <p className="text-gray-400 select-none">Ponna Rajesh</p>
                    <a href="https://www.linkedin.com/in/ponna-rajesh-8229302a8/"><p className="mt-4 cursor-pointer">Ping me <span>▶️</span></p></a>
                  </div>

                  <div className="w-5/6 text-white bg-zinc-800 p-10 mx-auto text-center rounded-md">
                    <p>Instagram</p>
                    <p className="text-gray-400 select-none">javascript_for_us</p>
                    <a href="https://www.instagram.com/javascript_for_us/"><p className="mt-4 cursor-pointer">Ping me <span>▶️</span></p></a>
                  </div>
                </div>




                <div className="lg:w-4/6 mx-auto  "> 
                <motion.h1 className="text-2xl text-center mb-9"
                whileInView={{x: 0, opacity:1}}
                initial={{x: 100, opacity:0}}
                transition={{duration: 0.5}}
                 >Mail Me</motion.h1>

                    <div id="mail" className="flex justify-center m  relative z-2 ">
                        <form action="" className="text-white" onSubmit={onSubmit}>
                                                
                            <label htmlFor=" " className="absolute lg:left-32 left-2 -top-3  bg-zinc-900  px-2">Name</label>
                            <input type="text" placeholder="Enter Your Name" className="w-96 h-12  px-10 py-7  bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-lime-500"  name="name" required/><br/>

                             <label htmlFor="" className="absolute lg:left-32 left-2 top-20 pt-2  bg-zinc-900  px-2 ">Mail</label>
                            <input  type="email" placeholder="Enter Your Email" className="w-96 h-12  px-10 py-7 bg-transparent border-2 border-gray-600 rounded-md my-10 focus:outline-none focus:ring focus:ring-lime-500" name="email"  required/><br/>
                                                    
                             <label htmlFor="" className="absolute lg:left-32 left-2  top-44 pt-3   bg-zinc-900  px-2 " >Message</label>
                            <textarea name="message" placeholder="Enter Your Message" className="w-96 h-56  px-10 bg-transparent border-2 border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-lime-500 py-5"  required/><br/>    

                            <motion.button type="submit" className="bg-transparent hover:border-2 border-gray-200 bg-violet-600 hover:border-0 text-white p-3 px-7 my-3 mt-4 rounded-md hover:bg-lime-500 shadow-md shadow-gray-700 "
                            whileHover={{
                              scale: 1.1,
                              transition: {
                                duration: 0.2
                              }
                            }}
                            >Send Message</motion.button>                 
                                                
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact