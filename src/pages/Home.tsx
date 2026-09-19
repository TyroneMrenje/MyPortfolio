import { FaArrowRight,FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaLinkedin ,FaLetterboxd } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Projects, Frontend, Backend, Database, Tools } from "../components/projects";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function Home() {

    const year = new Date().getFullYear();

    return(
        <div className="box-border overflow-hidden scroll-smooth bg-[#0b1c2d]">
            <Navbar />
            <main className="flex relative flex-col px-7 md:px-10 lg:px-20 ">
                <motion.section 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col justify-center bg-[#1f2432] scroll mt-10 p-8 rounded-lg gap-4 md:gap-2 border border-gray-600"
                >
                    <div className="flex flex-row items-center md:justify-center gap-2 border border-gray-800 bg-teal-950 p-1 w-50  rounded-md">
                        <span className=" relative h-[5px] w-[5px] animate-ping rounded-full bg-green-300 opacity-80"></span>
                        <span className="text-xs md:text-sm font-thin text-green-300"> AVAILABLE FOR WORK</span>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                        <span>&copy;TCM-{year}</span>
                        <span className="text-green-300 text-sm animate-pulse">Get in contact</span>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className=" text-3xl md:text-6xl text-white">TYRONE MRENJE</h1>
                        <h1 className="text-3xl md:text-6xl text-[#ff6a00]">Full Stack Developer</h1>
                        <span className="text-xs font-normal">Frontend(React || Vue) . Backend(Laravel || Python || Go) . ML(LangChain)</span>
                        <p className="text-sm md:text-md md:w-[70%] tracking-wide">I work across backend development and networking, turning business requirements into reliable, scalable systems that can handle real users.</p>
                        <div className="flex flex-row gap-4 mt-8">
                            <a href="#work">
                                 <button className="border border-gray-500 p-2 rounded-sm text-xs">Projects</button>
                            </a>
                               <a href="#contact">
                                <button className="flex flex-row items-center border-thin border-gray-500 p-2 gap-2 text-xs text-gray-900 bg-green-300 rounded-sm">Get in touch <FaArrowRight /></button>
                            </a>
                        </div>  
                    </div> 
                </motion.section>

                <motion.section id="about"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col mt-20"
                >
                    <div className="flex flex-col gap-2 md:space-y-3">
                            <span className="text-[#ff6a00]">About</span>
                            <span className="text-3xl font-bold">All About The Developer</span>
                            <p className="text-sm">Code, infrastructure, networks. One engineer tying it together.</p>
                    </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-3 mt-10">                 
                    <div className="flex flex-col items-center border border-gray-600 p-3 rounded-sm gap-2 lg:w-[20%] space-y-4 h-70">
                        <div className="rounded-full bg-[#ff6a00] p-2 w-15 h-15 flex items-center justify-center">
                           <span>TM</span>
                        </div>
                        <div className="flex flex-row gap-2 text-xs">
                            <span>Experience</span>
                            <span>3+ years</span>
                        </div>
                        <div className="flex flex-row gap-2 text-xs">
                            <span>Frontend</span>
                            <span>React Vue</span>
                        </div>
                         <div className="flex flex-row gap-2 text-xs">
                            <span>Backend</span>
                            <span>Laravel Python Go</span>
                        </div>
                        <div className="flex flex-row gap-2 text-xs">
                            <span>DB</span>
                            <span>Postgresql</span>
                            <span>MySQL</span>
                            <span>Redis</span>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 p-2 lg:w-[75%]">
                        <p className="tracking-wide text-xs md:text-sm text-pretty">I'm a full-time software developer with a strong backend foundation in Laravel and PostgreSQL, and I round that out with full-stack work in React, TypeScript, and Inertia.js. My approach is foundation-first — I get the schema and backend logic solid before touching the UI, because I'd rather build on something sturdy than patch things together later.
                        </p>
                       
                        <div className="flex flex-row items-center justify-between border-t border-gray-700 gap-2 p-2  mt-5 text-xs md:text-base">
                            <span>2026 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span>Software Engineer</span>
                                <span>Fiverr</span>                           
                            </div>
                            <span>Freelance</span>
                        </div>    

                        <div className="flex flex-row items-center justify-between border-t border-gray-700 gap-2 p-2 text-xs md:text-base">
                            <span>Nov 2025 - Jan 2026</span>
                            <div className="flex flex-col gap-2">
                                <span>Software Engineer</span>
                                <span>Forage</span>
                            </div>
                            <span>Apprentice</span>
                        </div> 

                         <div className="flex flex-row items-center justify-between border-t border-gray-700 gap-2 p-2 text-xs md:text-base">
                            <span>May 2024 - Aug 2024</span>
                            <div className="flex flex-col gap-2">
                                <span>IT Intern</span>
                                <span>Swahilipot Hub Foundation</span>
                            </div>
                            <span>Intern</span>
                        </div>              
                    </div>
                </div>
                </motion.section>

               <motion.section id="work" 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                 className="flex flex-col mt-10 ">
                    <div className="flex flex-col gap-2 md:space-y-3">
                        <span className="text-[#ff6a00]">Work</span>
                        <span className="text-3xl font-bold">Selected Systems.</span>
                        <p className="text-sm">Showcase of some of my projects. End to end</p>
                    </div>

                <div className="grid grid-rows-4 md:gap-2 mt-5">               
                    { Projects.map((project, index) => (
                
                            <div key={index} className="flex flex-col border-t border-gray-700 gap-4 brightness-100 transition delay-100 duration-300  ease-in-out hover:cursor-pointer hover:translate-x-1 hover:-translate-y-1  hover:backdrop-brightness-130">
                                <div className="flex flex-row justify-between mt-5">
                                    <h2 className="text-2xl text-[#ff6a00] font-bold">{project.title}</h2>
                                     <button className="p-2">
                                    <FaArrowUpRightFromSquare  className="h-5 w-5"/>
                                    </button>            
                                </div>
                                <p className="text-xs text-green-300">[{project.type}]</p>
                                <p className="md:w-[50%] text-pretty text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 md:mb-4">
                                    {project.languages.map((language,index)=> (
                                        <div key={index} className="text-xs border border-gray-700 rounded-md p-2">{language}</div>
                                    ))}
                                </div>                             
                        </div>
                        
                    ))}                   
                </div>
               </motion.section>

                <motion.section id="skills" 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col mt-10">
                    <div className="flex flex-col gap-2 space-y-3">
                        <span className="text-[#ff6a00]">Skills</span>
                        <span className="text-3xl font-bold">Skills that pay the Bills</span>
                        <p className="text-sm">Skills and languages I've picked up and used along the way</p>
                    </div>                 
                       <div className="  grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 bg-[#1f2432] border border-gray-600  mt-10 p-5 rounded-md">
                         {Frontend.map((frontend)=>(
                            <div className="flex flex-col items-center gap-4 text-sm p-4 lg:border-r border-gray-500">
                                <span className="text-lg text-green-300">{frontend.title}</span>
                                <div className="grid grid-cols-2 gap-3">
                                    {frontend.lang.map((lang,index)=>(
                                        <div key={index} className="flex flex-col items-center text-xs border border-gray-600 rounded-full p-2">{lang}</div>
                                    ))}
                                </div>
                            </div>
                            

                        ))}
                         {Backend.map((backend)=>(
                            <div className="flex flex-col items-center gap-3  border-y md:border-none lg:border-x border-gray-500 text-sm p-2 ">
                                <span className="text-lg text-green-300">{backend.title}</span>
                                <div className="grid grid-cols-3  gap-4">
                                    {backend.lang.map((lang,index)=>(
                                        <div key={index} className="flex flex-col items-center text-xs border border-gray-600 rounded-full p-2">{lang}</div>
                                    ))}
                                </div>
                            </div>
                            
                        ))}

                         {Database.map((data)=>(
                            <div className="flex flex-col items-center gap-3  lg:border-x border-gray-500 text-sm p-4">
                                <span className="text-lg text-green-300">{data.title}</span>
                                <div className="grid grid-cols-2 space-evenly gap-4">
                                    {data.lang.map((lang,index)=>(
                                        <div key={index} className="flex flex-col items-center text-xs border border-gray-600 rounded-full p-2">{lang}</div>
                                    ))}
                                </div>
                            </div>
                            
                        ))}

                        {Tools.map((tool)=>(
                            <div className="flex flex-col items-center gap-3 text-sm p-2 ">
                                <span className="text-lg text-green-300">{tool.title}</span>
                                <div className="grid grid-cols-2 gap-4">
                                    {tool.lang.map((lang,index)=>(
                                        <div key={index} className="flex flex-col items-center text-xs border border-gray-600 rounded-full p-2">{lang}</div>
                                    ))}
                                </div>
                            </div>
                            
                        ))}
                       </div>
                </motion.section>
                
                <motion.section id="contact"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center  gap-2 space-y-3 mt-10"
                >                   
                       <span className="text-[#ff6a00]">Contact</span>
                        <span className="text-3xl font-bold">Get In Touch</span>
                        <p className="md:text-lg text-md text-pretty lg:w-[60%]">Feel free to reach out if you have any questions.Open to  Full Stack, and Software Engineering roles — remote or on-site. The fastest way to reach me is email. I'm also on LetterBoxd if you want to DM or talk about Gandalf</p>
                        <div className="flex flex-row gap-4 mt-5 bg-[#1f2432]  p-5 rounded-full border border-gray-600">
                            <a href="mailto:your-tyronemrenje@gmail.com" className=" hover:underline">
                                <MdOutlineEmail className="h-7 w-7 hover:text-[#ff6a00]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/tyrone-mrenje" className="hover:underline">
                                <FaLinkedin className="h-7 w-7 hover:text-[#ff6a00]"/>
                            </a>
                            <a href=" https://github.com/TyroneMrenje" className="hover:underline">
                                <FaGithub className="h-7 w-7 hover:text-[#ff6a00]"/>
                            </a>
                            <a href="https://letterboxd.com/mrenje/" className=" hover:underline">
                                <FaLetterboxd className="h-7 w-7 hover:text-[#ff6a00]"/>
                            </a>
                            <a>
                                <p className="text-pretty tracking-wider text-sm ">
                                    +254792781047
                                </p>
                            </a>
                        </div>                
                </motion.section>
            </main>
            <footer className="flex items-center justify-center position-fixed bottom-0 m-10">
                <div className="flex flex-row space-x-4 text-xs">
                    <span>&copy;{year}</span>
                    <span>Built by Tyrone Mrenje(TCM)</span>
                </div>

            </footer>

        </div>
    )
}