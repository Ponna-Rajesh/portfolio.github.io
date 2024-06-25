import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"


function App() {
  return (
    <>
    <div className=" bg-zinc-900 text-white max-w-7xl mx-auto">
       <Navbar />
       <Home />
       <Skills />
    </div>
     
    </>
  )
}

export default App
