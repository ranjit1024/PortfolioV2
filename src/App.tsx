import { motion } from "motion/react";
import "./App.css";
import logo from "../public/Group 2.png";
function App() {
  return (
    <div className="bg-primary text-white font-mona">
      <div className="  py-3 px-10 w-[100vw]  fixed   bg-primary  items-center">
     
      <header className="    w-[100%] flex justify-between items-center  z-10  top-0">
        <div> <img src={logo} height={50} width={45}/></div>
        <ul className="flex gap-8">
          <li className="font-[250] text-[15px] hover:cursor-pointer hover:text-secondery ">
            <span className="ml-1 text-secondery">#1 </span>
            <span>About</span>
          </li>
          <li className="font-[300] text-[15px] hover:cursor-pointer hover:text-secondery  ">
            <span className="ml-1 text-secondery">#2 </span>
            <span>Skills</span>
          </li>
          <li className="font-[300] text-[15px] hover:cursor-pointer hover:text-secondery  ">
            <span className="ml-1 text-secondery">#3 </span>
            <span>Projects</span>
          </li>
        </ul>
      </header>
      </div>
      <div className="grid grid-cols-[10%_80%_10%]">
        <div className="w-[100%]">

        <div className="h-[100%] fixed top-[59vh] w-[7%]   ">
          <div className="flex justify-center items-center flex-col gap-5">
          <div className="hover:text-secondery hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </div>
          <div className="hover:text-secondery hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </div>
          <div className="hover:text-secondery hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
            <div className="p-[0.5px] mt-2 bg-white/50 h-100"> 
            </div>
          </div>
        </div>
        </div>



        <div className="flex h-[100vh]">
         
        </div>
        <div className="w-[100%]">
          <div className=" fixed top-[70vh] w-[13%] flex justify-center items-center flex-col">
            <p className="rotate-90 mb-10 text-gray-50/80">ranjitdas@gmail.com</p>
              <div className="p-[0.5px] mt-10 bg-white/50 h-20"> 
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
