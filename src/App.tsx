import { useState } from "react";
import "./App.css";
import earth from "./assets/back.webp";
import hotAir from "./assets/hovver.webp";
import fotter from "./assets/fotter.webp";

function App() {
  const [frontEnd, setFrontEnd] = useState(true);
  const [Backend, setBackend] = useState(false);
  const [database, setdatabase] = useState(false);
  const [devops, setdevops] = useState(false);
  return (
    <div className=" font-poppins overflow-x-auto overflow-y-hidden bg-[#f6f6f8]">
      <div className="bg-gradient-to-t overflow-x-hidden overflow-hidden relative to-blue-300 flex flex-col from-[#f6f6f8]">
        <div className=" h-[70vh] items-center  flex  flex-col justify-center">
          <div className="overflow-hidden">

          <img src={earth} alt="" className="absolute -top-160 animate-wiggle left-35 align-middle " />
          </div>
          <div className="absolute left-230 bottom-13 animate-bounceslow ">
            <img src={hotAir} alt="" height={100} width={170} className=""  />
          </div>
        </div>
      </div>

      <div className="pl-10 h-50  font-poppins  ">
        <p className="font-[500]  pb-2 text-[6rem]">
          Good morning, developer{" "}
        </p>
        <p className="text-[1.3rem] font-[500] text-gray-900">
          My name is Ranjit das,{" "}
          <span className="font-medium text-blue-500">
            I am a Full stack developer
          </span>
          , primarily focused on building{" "}
          <span className="text-blue-800">user-friendly</span> ui and scalable
          systems.{" "}
        </p>
      </div>

      <div className="relative flex pt-10  flex-col justify-center ">
        <div className="flex items-center ">
          <div className="  w-10 h-10 border-2 border-blue-500 left-22 top-6 rounded-full   relative bg-white flex items-center justify-center shadow-xl shadow-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="font-[600] left-25 top-6   relative font-poppins  text-[2.1rem] text-blue-600">
            <span className="text-gray-900">Tech</span> Stack
          </p>
        </div>
        <div
          className="left-10 h-12 w-12 border-blue-600 border-l-2 border-t-2 relative  rounded-tl-[80%]"
          style={{}}
        ></div>
      </div>

      <div className="bg-[#f6f6f8] relative px-20 py-3 ">
        <div
          className="left-10 h-200 w-0.5 top-0  bg-blue-600 absolute  r"
          style={{}}
        ></div>
        <div
          className="bg-gray-50 border-1 border-gray-200  pb-5 rounded-md shadow-sm"
          onClick={() => {
            console.log("fsdf");
          }}
        >
          <ul className="flex  font-poppins   font-medium">
            <li
              className={`rounded-md hover:scale-[102%] border-1 border-gray-200    hover:cursor-pointer px-10 py-1 text-[1.1rem] ${
                frontEnd
                  ? "bg-white  shadow-sm shadow-blue-200 border-1 border-blue-600/50"
                  : null
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setBackend(false);
                setdatabase(false);
                setdevops(false);
                setFrontEnd(true);

                console.log("fsdf");
              }}
            >
              Front-End
            </li>
            <li
              className={`rounded-md border-1 hover:scale-[102%]   hover:cursor-pointer border-gray-200  px-10 py-1 text-[1.1rem] ${
                Backend
                  ? "bg-white  shadow-sm shadow-blue-300 border-1 border-blue-600/50"
                  : null
              }`}
              onClick={() => {
                setFrontEnd(false);
                setdatabase(false);
                setdevops(false);
                setBackend(true);
              }}
            >
              Backend
            </li>
            <li
              className={`rounded-md border-1 hover:scale-[102%]   hover:cursor-pointer border-gray-200  px-10 py-1 text-[1.1rem] ${
                database
                  ? "bg-white  shadow-sm shadow-blue-300 border-1 border-blue-600/50"
                  : null
              }`}
              onClick={() => {
                setFrontEnd(false);
                setBackend(false);
                setdevops(false);
                setdatabase(true);
              }}
            >
              Database
            </li>
            <li
              className={`rounded-md border-1 hover:scale-[102%]   hover:cursor-pointer border-gray-200  px-10 py-1 text-[1.1rem] ${
                devops
                  ? "bg-white  shadow-sm shadow-blue-300 border-1 border-blue-600/50"
                  : null
              }`}
              onClick={() => {
                setFrontEnd(false);
                setBackend(false);
                setdatabase(false);
                setdevops(true);
              }}
            >
              DevOps
            </li>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-8 opacity-80 absolute right-21 text-center top-4 margin-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </ul>
          <div>
            {frontEnd ? (
              <div className="flex py-10 px-8 gap-5 ">
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/html-5--v1.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/css3.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/ios/100/javascript--v1.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/react-native.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/tailwindcss.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/recoil-js.png" />

                <LanguagesAndFreamworks src="https://framerusercontent.com/images/3aQX5dnH5Yqgsn98QXKF2ZXxIE.png" />
                <LanguagesAndFreamworks src="https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" />
              </div>
            ) : null}
          </div>

          <div>
            {Backend ? (
              <div className="flex py-10 px-8 gap-5 ">
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/nodejs.png" />
                <LanguagesAndFreamworks src="https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/express-js.png" />
              </div>
            ) : null}
          </div>

          <div>
            {database ? (
              <div className="flex py-10 px-8 gap-5 ">
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/postgreesql.png" />
                <LanguagesAndFreamworks src="https://img.icons8.com/color/96/prisma-orm.png" />
              </div>
            ) : null}

            <div>
              {devops ? (
                <div className="flex py-10 px-8 gap-5 ">
                  <LanguagesAndFreamworks src="https://img.icons8.com/color/96/git.png" />
                  <LanguagesAndFreamworks src="https://img.icons8.com/color/96/github--v1.png" />
                  <LanguagesAndFreamworks src="https://img.icons8.com/color/96/amazon-web-services.png" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>


      <div>

      <div className="w-10 h-10 font-poppins border-2  border-blue-500 top-22 rounded-full left-5  relative bg-[#f6f6f8] flex items-center justify-center shadow-xl shadow-purple-200 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      </div>
      <div className="flex ">
        <p className="font-[600] left-20 top-11 relative font-poppins  text-[2.1rem] text-black">
        Featured <span className="text-purple-600"> Projects </span>
          </p>
      </div>
      <div className=" px-18 pt-15  flex  bg-[#f6f6f8] font-poppins gap-5 h-100% w-[100%]  ">
        <ProjectCard title="E-WALLET" des="A simple E-Wallet website where you can store, send , receive money using same wallet and through bank" link="http://44.203.187.243:3000/" code="https://github.com/ranjit1024/E-wallet"/>

        <ProjectCard title="SHORT BLOG" des="A simple blogging where you can sign in and write their blog in short which is easy to read and precise " link="https://blog-2f8v.vercel.app/" code="https://github.com/ranjit1024/blog"/>
        <ProjectCard title="BASU'S CONSULTING" des=" A Landing page that shows which service they provide for consulting firms,and helps to get dream for for candidate." link="https://basusconsulting.com/" code="https://github.com/ranjit1024/personal-project"/>

      </div>
      </div>
    

      <div className=" flex flex-col h-1   ">

      <div className="w-10 h-10 p-2 font-poppins border-2  -top-10 border-blue-500  rounded-full left-5  relative bg-[#f6f6f8] flex items-center justify-center shadow-xl shadow-yellow-200 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>

      </div>

      <div className="flex ">
        <p className="font-[600] left-20 -top-20  relative font-poppins  text-[2.1rem] text-black">
        Get <span className="text-yellow-600"> In Touch </span>
          </p>
      </div>
      </div>
      

      
      <div className="px-20 py-10 ">
        <p className="w-120 text-[3vh] font-500 text-gray-900 font-poppins">Feel free to contact me if you have any questions or suggestions. I am always open to new ideas and opportunities.</p>
        <div className="pt-10 flex  gap-10">
          <button className="bg-gray-50 border hover:scale-105  hover:cursor-pointer border-gray-300 flex items-center gap-3 rounded-2xl px-5 text-lg p-2" onClick={()=>{
            window.open("https://github.com/ranjit1024")
          }}>
          <img width="25" height="38" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
          <p>Github</p>
          </button>
          <button className="bg-gray-50 border hover:scale-105  hover:cursor-pointer border-gray-300 flex items-center gap-3 rounded-2xl px-5 text-lg p-2" 
          onClick={()=>{
            window.open('https://x.com/ranjitd18755665')
          }}>
          <img width="25" height="96" src="https://img.icons8.com/color/96/twitterx--v1.png" alt="twitterx--v1"/>
          <p>Twiter</p>
          </button>
          <button className="bg-gray-50 border hover:scale-105  hover:cursor-pointer border-gray-300 flex items-center gap-3 rounded-2xl px-5 text-lg p-2" 
          onClick={()=>{
            window.open('https://mail.google.com/mail/u/0/#inbox?compose=new')
          }}>
         <img width="25" height="96" src="https://img.icons8.com/color/96/gmail-new.png" alt="gmail-new"/>
          <p>ranjitdas2048@gmail.com</p>
          </button>
     
       
        </div>
      
      </div>
        
      <div className="pt-10 object-cover relative">
        <div>

        <p className="absolute top-100 left-50 text-gray-100 text-shadow-red-900 font-semibold shadow-pink-900" style={{
          

          textShadow:'1px 1px 1px 10px rgba(255,255,255,1) '
        }}>inspired by bsodium.fr </p>
        <img src={fotter} alt="" />
        </div>
      </div>
      

    </div>
  );
}

function LanguagesAndFreamworks({ src }: { src: string }) {
  return (
    <div className="p-5 flex text-center  gap-10 font-poppins justify-center bg-gradient-to-bl to-gray-50 from-gray-100 shadow-sm rounded-3xl ">
      <img width="64" height="96" src={src} alt="html-5--v1" />
    </div>
  );
}

function ProjectCard({title ,des, link, code}:{
  title:string,
  des:string,
  link:string,
  code:string
}){
  return <div className=" h-100 w-[100%] ">
    <div className="p-5 rounded-xl shadow-sm bg-white border border-gray-200 hover:shadow-md transition-all ">
  <div className="flex items-center gap-3 mb-2">
    <div className="bg-gray-100 p-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    </div>
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
  </div>

  <p className="text-sm text-indigo-500 mb-2">&lt;/&gt; TypeScript</p>
  <p  className="text-gray-600 text-sm mb-4 h-[9vh]">
  {/* */}
  {des}
  </p>

  <div className="flex items-center justify-between text-sm text-gray-500">
    
    <div className="text-purple-600 font-semibold cursor-pointer" onClick={()=>{
      window.open(code)
    }}>{`{ }`} Code</div>
    <button onClick={()=>{
      window.open(link)
    }} className="bg-purple-600 px-4 py-2 rounded-2xl text-white hover:cursor-pointer"> visit website</button>
  </div>
</div>
 
  </div>
}
export default App;
