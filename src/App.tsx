import "./App.css";
import logo from "./assets/Group 2.png";
import { Github, SquareArrowOutUpRight, Triangle } from "lucide-react";
function App() {
  return (
    <div className="bg-primary h-100 text-white font-mona scroll-smooth">
      <div className="  py-3 px-10 w-[100vw]  fixed z-10  bg-primary   items-center">
        <header className="w-[100%] flex justify-between items-center    top-0">
          <div>
            {" "}
            <img src={logo} height={50} width={45} />
          </div>
          <ul className="flex gap-8">
            <li className="font-[250] text-[15px] hover:cursor-pointer hover:text-secondery ">
              <span className="ml-1 text-secondery">#1 </span>
              <a href="#about" className="transition">
                About
              </a>
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
      <div className="grid grid-cols-[10%_80%_10%] h-[100%]">
        <div className="w-[100%] h-[100%] mt-20 bg-primary">
          <div className="h-[100%] fixed top-[59vh] w-[7%]   ">
            <div className="flex justify-center items-center flex-col gap-5">
              <div className="hover:text-secondery hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="hover:text-secondery hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-twitter-icon lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div className="hover:text-secondery hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="p-[0.5px] mt-2 bg-white/50 h-100"></div>
            </div>
          </div>
        </div>

        <div className="flex  text-white p-8 h-[100%] flex-col w-[100%] mt-20   bg-primary  ">
          <div className="flex  justify-center flex-col   ">
            <p className="text-secondery font-normal text-md font-pop ml-2 -mt-3 ">
              Hi, &nbsp; My name &nbsp; is &nbsp; ,
            </p>

            <div className="pt-1 h-[100%] -mt-1">
              <p className="text-[5.5rem] font-bold text-gray-200">
                Ranjit Das.
              </p>
              <p className="text-[5rem] font-bold text-gray-400 -mt-3">
                I Build things for web.{" "}
              </p>
              <p className="w-[70%] mt-2 text-gray-300 text-[1.05rem]  leading-7">
                I'm a full stack developer focused on delivering intuitive user
                experiences and building robust, scalable backend systems.
              </p>
            </div>
          </div>

          <div
            id="about"
            className=" about mt-35 pl-5 flex justify-center flex-col bg-primary h-[100%] "
          >
            <div className="flex items-center ">
              <p className="text-white">
                <span className="mx-2  text-secondery text-[1.6rem] font-">
                  #1.
                </span>

                <span className="text-[1.6rem] text-gray-300 font-bold">
                  About Me
                </span>
              </p>
              <div className="p-[0.5px] ml-3 w-80 bg-white/40 rounded-2xl"></div>
            </div>
            <div className="mt-8 ml-2 grid grid-cols-[60%_40%] gap-5  w-[100%]">
              <div className=" w-[90%]">
                <p className=" text-gray-400 text-[1.1rem] leading-8 ">
                  I'm Ranjit Das, a{" "}
                  <span className="text-secondery"> full-stack developer</span>{" "}
                  focused on building clean, scalable, and user-centric digital
                  products. I don’t follow hobbies-my passion is solving
                  real-world problems through thoughtful code and simple design.
                  Whether it’s crafting seamless user experiences or
                  architecting robust backends, I build with clarity, purpose,
                  and impact.
                </p>

                <p className="mt-4 text-gray-400 text-[1.1rem]">
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="flex gap-14">
                  <ul className="mt-5 flex flex-col gap-3">
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        Javascript (es6)
                      </p>
                    </li>
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        React.js
                      </p>
                    </li>
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        Hono.js
                      </p>
                    </li>
                  </ul>
                  <ul className="mt-5 flex flex-col gap-3">
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        Typescript
                      </p>
                    </li>
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        Postgress
                      </p>
                    </li>
                    <li className="flex items-center gap-1">
                      <Triangle className="size-2 rotate-90 text-secondery" />
                      <p className="text-sm text-gray-300 font-light">
                        Express.js
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[100%] w-[100%] -z-0 border-2 border-secondery relative rounded-md ">
                <div className="h-[100%] w-[100%] relative left-4  bottom-4 z-2  ">
                  <div className=" bg-[url(./assets/profile.png)]   bg-center bg-cover  h-full rounded-md bg-blend-difference bg-secondery/30  bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="skill"
            className=" about  mt-35 pl-5 flex justify-center flex-col bg-primary "
          >
            <div className="flex items-center ">
              <p className="text-white">
                <span className="mx-2  text-secondery text-[1.6rem] font-">
                  #2.
                </span>

                <span className="text-[1.6rem] font-bold">
                  skills & Technologies
                </span>
              </p>
              <div className="p-[0.5px] ml-3 w-80 mt-2 bg-white/40 rounded-2xl"></div>
            </div>
            <div className="pt-10 ml-2 flex-col   shadow rounded-2xl flex gap-9  text-white ">
              <div className="flex flex-col">
                <p className="ml-1 mb-3 font-normal text-[1.2rem]">
                  Front-end:
                </p>
                <div className="flex gap-4">
                  <Badge skill="html"></Badge>
                  <Badge skill="css"></Badge>
                  <Badge skill="javascript"></Badge>
                  <Badge skill="Typescript"></Badge>
                  <Badge skill="React.js"></Badge>
                  <Badge skill="Next.js"></Badge>
                  <Badge skill="TailwindCss"></Badge>
                  <Badge skill="Framer"></Badge>
                  <Badge skill="Framer"></Badge>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="ml-1 mb-3 font-[500] text-[1.2rem]">Back-end:</p>
                <div className="flex gap-4">
                  <Badge skill="Express.js"></Badge>
                  <Badge skill="Hone.js"></Badge>
                  <Badge skill="Postgress"></Badge>
                  <Badge skill="Prisma"></Badge>
                  <Badge skill="websocket"></Badge>
                  <Badge skill="Mongo"></Badge>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="ml-1 mb-3 font-[500] text-[1.2rem]">
                  Tools and Devops:
                </p>
                <div className="flex gap-4">
                  <Badge skill="Git"></Badge>
                  <Badge skill="GitHub"></Badge>
                  <Badge skill="Docker"></Badge>
                  <Badge skill="Docker Hub"></Badge>
                  <Badge skill="Docker Compose"></Badge>
                  <Badge skill="CI/CD"></Badge>
                  <Badge skill="AWS"></Badge>
                </div>
              </div>
            </div>
          </div>

          <div
            id="proj"
            className="   mt-35 bg-primary   pl-5 flex justify-center flex-col "
          >
            <div className="flex items-center  ">
              <p className="text-white">
                <span className="mx-2  text-secondery text-[1.6rem] ">#3.</span>

                <span className="text-[1.6rem] font-bold text-gray-300">
                  Some Things I’ve Built
                </span>
              </p>
              <div className="p-[0.5px] ml-3 w-80  bg-white/40 rounded-2xl"></div>
            </div>
            <div className="mt-15 ml-2 space-y-40 ">
              <Project1 />
              <Project2/>
              <Project3/>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[100%] mt-20 bg-primary">
          <div className=" fixed top-[70vh] w-[13%] flex justify-center items-center flex-col">
            <p className="rotate-90 mb-10 text-gray-50/80 ">
              ranjitdas@gmail.com
            </p>
            <div className="p-[0.5px] mt-10 bg-white/50 h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ skill }: { skill: string }) {
  return (
    <div className="bg-secondery/30 border border-secondery text-white rounded-2xl flex w-fit px-3 text-[0.9rem] font-medium  ">
      {skill}
    </div>
  );
}

function Project1() {
  return (
    <div className=" grid grid-cols-[60%_40%] h-100 gap-10 bg-primary">
      <div className="rounded-2xl  ">
        <div className="bg-[url(./assets/revisly.png)]  bg-[#367E7E]/60 bg-blend-darken h-100 bg-size-[auto_600px] rounded-md bg-left-top  bg-no-repeat "></div>
      </div>
      <div className="flex flex-col h-100  justify-center items-end">
        <p className="text-secondery  text-sm font-medium">Featured Project</p>
        <p className="text-gray-100 text-[1.5rem] mt-1 font-semibold">
          Revisly
        </p>
        <div className="mt-5 bg-[#162040] py-5 px-5 w-[180%] rounded-md shadow leading-7 text-gray-400 shadow-[#162040] ">
          An AI-powered tool designed for smarter, faster revision.
It automatically generates subject-specific notes using AI, and also lets you upload your own notes for personalized learning.
        <p className="mt-2">You can select intervals and take tests based on your chosen subjects — the system evaluates your answers and gives you a performance score. </p>
          <p className="mt-2">and on the basis of your  avarage test socre it will tell how much you have remember.</p>
        </div>
        <div className="mt-3 flex  font-light text-sm text-gray-300 justify-end  gap-3 flex-wrap">
          <p>Next.js</p>
          <p>NextAuth</p>
          <p>TailwindCss </p>
          <p>Prisma</p>
          <p>Postgress</p>
          <p>Redis</p>
          <p>CloudFlare workers</p>
        </div>
        <div className="mt-5 flex gap-5">
          <Github className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
          <SquareArrowOutUpRight className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
        </div>
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className=" grid grid-cols-[40%_60%] h-100 gap-10 bg-primary">
    
      <div className="flex flex-col h-100 justify-center items-start z-10">
        <p className="text-secondery  text-sm font-medium">Featured Project</p>
        <p className="text-gray-100 text-[1.5rem] mt-1 font-semibold">
          E-Wallet
        </p>
        <div className="mt-5 bg-[#162040] py-5 px-5 w-[130%] rounded-md shadow leading-6 text-gray-400 
         shadow-[#162040] ">
          <p>E-wallet is simple applicaion where you can create account and send Fake money
            i also implemented fake banking deposite and withdraw api  </p>
        </div>
        <div className="mt-3 flex w-[100%] font-light text-sm text-gray-300 justify-start gap-3 flex-wrap">
          <p>Next.js</p>
          <p>TurboRepo</p>
          <p>TailwindCss</p>
          <p>Prisma</p>
          <p>Postgress</p>
        </div>
        <div className="mt-5 flex gap-5">
          <Github className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
          <SquareArrowOutUpRight className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
        </div>
      </div>
        <div className="rounded-2xl  ">
        <div className="bg-[url(./assets/ewallet.png)] bg-secondery/40 bg-blend-darken h-100  bg-cover rounded-md bg-left-top  bg-no-repeat ">
        
        </div>
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div className=" grid grid-cols-[60%_40%] h-100 gap-10 bg-primary">
      <div className="rounded-2xl  ">
        <div className="bg-[url(./assets/first.png)]  bg-[#367E7E]/60 bg-blend-darken h-100 bg-size-[auto_600px] rounded-md bg-left-top  bg-no-repeat "></div>
      </div>
      <div className="flex flex-col h-100 justify-center items-end">
        <p className="text-secondery  text-sm font-medium">Featured Project</p>
        <p className="text-gray-100 text-[1.5rem] mt-1 font-semibold">
          basusconsulting
        </p>
        <div className="mt-5 bg-[#162040] py-5 px-5 w-[130%] rounded-md shadow leading-6 text-gray-400 shadow-[#162040] ">
          Here's a polished and professional version of your request for a simple landing page for a consulting firm named Basus's consulting.
        </div>
        <div className="mt-3 flex  font-light text-sm text-gray-300 justify-end  gap-3 flex-wrap">
          <p>Html</p>
          <p>Css</p>
          <p>JavaScript</p>
        </div>
        <div className="mt-5 flex gap-5">
          <Github className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
          <SquareArrowOutUpRight className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"/>
        </div>
      </div>
    </div>
  );
}
export default App;
