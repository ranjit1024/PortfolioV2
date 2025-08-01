import "./App.css";
import logo from "./assets/Group 2.png";
import { Github, Menu, SquareArrowOutUpRight, Triangle, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
function App() {
  function open({ link }: { link: string }) {
    window.open(link, "_black");
  }
  const [show, setShow] = useState<Boolean>(true);
  const [lastScrollY, setLastScollY] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  useEffect(() => {
    const handelScrollY = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false); // Scrolling down — hide
      } else {
        setShow(true); // Scrolling up — show
      }
      setLastScollY(currentScrollY);
    };

    window.addEventListener("scroll", handelScrollY);
    return () => window.removeEventListener("scroll", handelScrollY);
  }, [lastScrollY]);

  return (
    <div className="bg-primary h-100 text-white font-mona scroll-smooth">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="  py-3 px-5  max-md:px-3 w-[100vw]  shadow-cyan-300/3  fixed z-10 bg-primary/10 backdrop-blur-sm max-md:h-18   items-center"
      >
        <motion.header className=" flex justify-between items-center ">
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="max-md:ml-2"
          >
            {" "}
            <img src={logo} height={20} width={41} />
          </motion.div>
          <div className="min-md:hidden">
            <ul className="">
              <Menu
                className="size-10 text-secondery"
                onClick={() => {
                  setModalOpen(true);
                  setShow(false);
                }}
              ></Menu>
            </ul>
            {modalOpen && (
              <motion.div
                initial={{
                  left: "100vh",
                  top: 10,
                  opacity: 0,
                }}
                animate={{
                  left: 0,
                  opacity: 1,
                  top: 100,
                  transition: { type: "tween", duration: 0.3, damping: 15 },
                }}
                exit={{ left: "100vh", opacity: 0 }}
                className="absolute left-0    h-[100vh] w-[100vw]  "
              >
                <div className=" relative  inset-0 bg-gray-950/80 backdrop-blur-lg h-full w-full ">
                  <div className="absolute right-2 top-2">
                    <X
                      className="size-10 text-secondery  "
                      onClick={() => {
                        setShow((current) => !current);
                        setModalOpen(false);
                      }}
                    ></X>
                  </div>

                  <ul className="flex  flex-col p-5 h-[100%]  gap-15  justify-center items-stretch ">
                    <Link to="about" smooth={true} duration={500}>
                      <li
                        onClick={() => {
                          setModalOpen(false);
                        }}
                        className="font-semibold  text-[2.5rem]  hover:cursor-pointer hover:text-secondery "
                      >
                        <span className="ml-1 text-secondery">#1 </span>
                        <a href="#about" className="transition">
                          About Me
                        </a>
                      </li>
                    </Link>
                    <Link to="skill" smooth={true} duration={500}>
                      <li
                        onClick={() => {
                          setModalOpen(false);
                        }}
                        className="font-semibold text-[2.5rem] hover:cursor-pointer hover:text-secondery  "
                      >
                        <span className="ml-1 text-secondery">#2 </span>
                        <span>Skills</span>
                      </li>
                    </Link>
                    <Link to="proj" smooth={true} duration={500}>
                      <li
                        onClick={() => {
                          setModalOpen(false);
                        }}
                        className="font-semibold text-[2.5rem] hover:cursor-pointer hover:text-secondery  "
                      >
                        <span className="ml-1 text-secondery">#3 </span>
                        <span>Projects</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
          <ul className="flex gap-8 max-md:hidden">
            <Link to="about" smooth={true} duration={500}>
              <motion.li
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="font-[300] text-[15px] hover:cursor-pointer hover:text-secondery "
              >
                <span className="ml-1 text-secondery">#1 </span>
                <a href="#about" className="transition">
                  About Me
                </a>
              </motion.li>
            </Link>
            <Link to="skill" smooth={true} duration={500}>
              <motion.li
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="font-[300] text-[15px] hover:cursor-pointer hover:text-secondery  "
              >
                <span className="ml-1 text-secondery">#2 </span>
                <span>Skills</span>
              </motion.li>
            </Link>
            <Link to="proj" smooth={true} duration={500}>
              <motion.li
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="font-[300] text-[15px] hover:cursor-pointer hover:text-secondery  "
              >
                <span className="ml-1 text-secondery">#3 </span>
                <span>Projects</span>
              </motion.li>
            </Link>
          </ul>
        </motion.header>
      </motion.div>
      <div className="grid grid-cols-[10%_80%_10%] max-md:grid-cols-1 h-[100%]">
        <div className="w-[100%] h-[100%] mt-20 bg-primary max-md:hidden ">
          <motion.div
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
            }}
            className="h-[100%] fixed top-[59vh] w-[7%]   "
          >
            <div className="flex  justify-center items-center flex-col gap-5">
              <div
                className="hover:text-secondery hover:cursor-pointer"
                onClick={() => {
                  open({ link: "https://github.com/ranjit1024" });
                }}
              >
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
              <div
                className="hover:text-secondery hover:cursor-pointer"
                onClick={() => {
                  open({ link: "https://x.com/ranjitd18755665" });
                }}
              >
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
              <div
                className="hover:text-secondery hover:cursor-pointer"
                onClick={() => {
                  open({
                    link: "https://www.linkedin.com/in/ranjit-das-31b866352/",
                  });
                }}
              >
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
          </motion.div>
        </div>

        <div className="flex  max-md:mt-40 scroll-smooth text-white p-8 max-md:p-3 h-[100%] flex-col w-[100%] mt-20   bg-primary  ">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.6,
              delay: 0.8,
            }}
            className="flex  justify-center flex-col pl-3 mt-10   "
          >
            <p className="text-secondery font-normal text-md font-pop ml-2 -mt-3 ">
              Hi, &nbsp; My name &nbsp; is &nbsp; ,
            </p>

            <div className="pt-1 h-[100%] -mt-1">
              <p className="text-[5.5rem] max-md:text-[2.5rem] font-bold text-gray-200">
                Ranjit Das.
              </p>
              <p className="text-[5rem] max-md:text-[2rem] max-md:mt-2 font-bold text-gray-400 -mt-3">
                I Build things for web.{" "}
              </p>
              <p className="w-[70%] mt-2 max-md:w-[100%] max-md:text-start max-md:mt-4 text-gray-300 text-[1.1rem]  leading-7">
                I'm a full stack developer focused on delivering intuitive user
                experiences and building robust, scalable backend systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            id="about"
            className=" max-md:mt-30 about mt-35 pl-5 max-md:pl-1 flex justify-center  flex-col bg-primary h-[100%]  "
          >
            <div className="flex items-center ">
              <p className="text-white">
                <span className="mx-2   text-secondery text-[1.6rem] ">
                  #1.
                </span>

                <span className="text-[1.6rem]  text-gray-300 font-bold">
                  About Me
                </span>
              </p>
              <div className="p-[0.5px] max-md:w-30 ml-3 w-80 bg-white/40 rounded-2xl"></div>
            </div>
            <div className="mt-8 ml-2 grid grid-cols-[60%_40%] max-md:flex max-md:flex-wrap gap-5  h-[100%]">
              <div className=" w-[90%]">
                <p className=" text-gray-400 text-[1.1rem] leading-8 ">
                  I'm Ranjit Das, a{" "}
                  <span className="text-secondery"> full-stack developer</span>{" "}
                  focused on building clean, scalable, and user-centric digital
                  products.
                </p>
                <p className="mt-4 text-gray-400 text-[1.1rem]">
                  I don't have any personal life, no hobbies, I need three
                  things in my life that I want to build products, 2 Hours for
                  exercise and 7 Hours of sleep. The rest of the time, I want to
                  build, I want to work..
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
              <div
                className="h-[100%] w-[100%] -z-0 border-2 border-secondery  relative max-md:h-70 max-md:-mt-10
               rounded-md max-md:border-none "
              >
                <div className="h-[100%] w-[100%] relative left-4 max-md:left-0 max-md:bottom-0 bottom-4 z-2  ">
                  <div className=" bg-[url(./assets/profile.png)]    bg-center bg-cover  h-full rounded-md bg-blend-difference bg-secondery/30  bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            id="skill"
            className="max-md:mt-15 mt-35 pl-5 max-md:pl-2 flex justify-center flex-col bg-primary "
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
                <div className="flex gap-4  max-md:flex-wrap">
                  <Badge skill="html"></Badge>
                  <Badge skill="css"></Badge>
                  <Badge skill="javascript"></Badge>
                  <Badge skill="Typescript"></Badge>
                  <Badge skill="React.js"></Badge>
                  <Badge skill="Next.js"></Badge>
                  <Badge skill="TailwindCss"></Badge>
                  <Badge skill="Framer Motion"></Badge>
                  <Badge skill="redux toolkit"></Badge>
                </div>
              </div>

              <div className="flex flex-col ">
                <p className="ml-1 mb-3 font-[500] text-[1.2rem]">Back-end:</p>
                <div className="flex gap-4 max-md:flex-wrap">
                  <Badge skill="Express.js"></Badge>
                  <Badge skill="Hono.js"></Badge>
                  <Badge skill="Postgresql"></Badge>
                  <Badge skill="Prisma ORM"></Badge>
                  <Badge skill="websocket"></Badge>
                  <Badge skill="mongodb"></Badge>
                  <Badge skill="Redis"></Badge>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="ml-1 mb-3 font-[500] text-[1.2rem]">
                  Tools and Devops:
                </p>
                <div className="flex gap-4 max-md:flex-wrap">
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
          </motion.div>

          <div
            id="proj"
            className="max-md:mt-25  mt-35 bg-primary max-md:pl-2   pl-5 flex justify-center flex-col "
          >
            <div className="flex items-center  ">
              <p className="text-white">
                <span className="mx-2  text-secondery text-[1.6rem] ">#3.</span>

                <span className="text-[1.6rem] font-bold text-gray-300">
                  Some Things I’ve Built
                </span>
              </p>
              <div className="p-[0.5px] ml-3 w-80 max-md:w-10 bg-white/40 rounded-2xl"></div>
            </div>
            <div className="mt-15 ml-2 space-y-40 max-md:hidden ">
              <Project1 />
            </div>
            <div className="mt-4 ml-2 space-y-10 min-md:hidden  ">
              <MobileProject />
            </div>
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="flex mt-30 justify-center flex-col items-center"
            >
              <p className="text-secondery font-[400] ">#4 What's Next</p>
              <p className="py-5 font-semibold text-[2.4rem] text-zinc-400">
                Get In Touch
              </p>
              <p className="text-center w-[50%] max-md:w-[90%] text-zinc-400 leading-6 text-[1.06rem] ">
                I’m currently looking for any opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I’ll
                try my best to get back to you!
              </p>
              <motion.button
                whileHover={{
                  x: -5,
                  y: -5,
                  boxShadow: " 4px 4px lightgray",
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                onClick={() => {
                  open({
                    link: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzFszTxZQSptKZSHbLrwmKNcpLwKqnjXDmKCDpDzchxkVkXZqQvqlqCzlJGPGRMVbjx",
                  });
                }}
                className="mt-10 text-secondery border-secondery border px-8 py-4 hover:cursor-pointer "
              >
                Say Hello
              </motion.button>
            </motion.div>
          </div>
        </div>

        <div className="w-[100%] h-[100%] mt-20 bg-primary max-md:hidden">
          <motion.div
            initial={{
              x: 20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.6,
              delay: 0.3,
            }}
            className=" fixed top-[70vh] w-[13%] flex justify-center items-center flex-col"
          >
            <p className="rotate-90 mb-10 text-gray-50/80 ">
              ranjitdas2048@gmail.com
            </p>
            <div className="p-[0.5px] mt-10 bg-white/50 h-100"></div>
          </motion.div>
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
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      }}
      viewport={{
        once: true,
      }}
      className=" grid grid-cols-[60%_40%] h-100 gap-10 bg-primary"
    >
      <div
        className="rounded-2xl  "
        onClick={() => {
          open("https://revision-xw93.vercel.app/");
        }}
      >
        <div className="bg-[url(./assets/revisly.png)]  bg-[#367E7E]/60 bg-blend-darken h-100 bg-size-[auto_600px] rounded-md bg-left-top  bg-no-repeat "></div>
      </div>
      <div className="flex flex-col h-100  justify-center items-end mr-2">
        <p className="text-secondery  text-sm font-medium">Featured Project</p>
        <p className="text-gray-100 text-[1.5rem] mt-1 font-semibold">
          Revisly
        </p>
        <div className="mt-5 bg-[#162040] py-5 px-5 w-[180%] rounded-md shadow leading-7 text-gray-400 shadow-[#162040] ">
          An AI-powered tool designed for smarter, faster revision. It
          automatically generates subject-specific notes using AI, and also lets
          you upload your own notes for personalized learning.
          <p className="mt-2">
            You can select intervals and take tests based on your chosen
            subjects — the system evaluates your answers and gives you a
            performance score.{" "}
          </p>
          <p className="mt-2">
            and on the basis of your avarage test socre it will tell how much
            you have remember.
          </p>
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
          <Github
            onClick={() => {
              open("https://github.com/ranjit1024/revision");
            }}
            className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"
          />
          <SquareArrowOutUpRight
            onClick={() => {
              open("https://revision-xw93.vercel.app/");
            }}
            className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

function MobileProject() {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
      }}
      className="bg-[#162040] shadow-2xl flex w-[95%] justify-center items-center opacity-90 rounded-md p-10 max-md:p-6"
      onClick={() => {
        open("https://revision-xw93.vercel.app/");
      }}
    >
      <div className="">
        <p className="text-secondery  text-sm font-medium">Featured Project</p>
        <p className="text-gray-100 text-[1.5rem] mt-1 font-semibold">
          Revisly
        </p>
        <div className="mt-5  py-5 px-5 max-md:px-1 w-fit rounded-md shadow leading-7 text-gray-400 ] ">
          An AI-powered tool designed for smarter, faster revision. It
          automatically generates subject-specific notes using AI, and also lets
          you upload your own notes for personalized learning.
          <p className="mt-2">
            You can select intervals and take tests based on your chosen
            subjects — the system evaluates your answers and gives you a
            performance score.{" "}
          </p>
          <p className="mt-2">
            and on the basis of your avarage test socre it will tell how much
            you have remember.
          </p>
        </div>
        <div className="mt-3 flex  font-light text-sm text-gray-300 justify-end  gap-3 flex-wrap max-md:justify-start">
          <p>Next.js</p>
          <p>NextAuth</p>
          <p>TailwindCss </p>
          <p>Prisma</p>
          <p>Postgress</p>
          <p>Redis</p>
          <p>CloudFlare workers</p>
        </div>
        <div className="mt-5 flex gap-5">
          <Github
            onClick={() => {
              open("https://github.com/ranjit1024/E-wallet");
            }}
            className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"
          />
          <SquareArrowOutUpRight
            onClick={() => {
              open("https://revision-xw93.vercel.app/");
            }}
            className="hover:text-secondery hover:cursor-pointer size-6 text-gray-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
