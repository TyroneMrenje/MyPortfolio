import { FaArrowRight } from "react-icons/fa";

export default function Home() {

    const year = new Date().getFullYear();

    return(
        <div className="box-border overflow-hidden scroll-smooth bg-[#0b1c2d]">
            <nav className="flex items-center justify-between position-fixed top-0 w-full text-white border-b border-gray-700 border/40 p-5 z-10">
                <div>
                    <span className="text-md">Tyrone&nbsp;Mrenje</span>
                </div>
                <div className="flex flex-row text-sm gap-4">
                    <a href="">
                        <span >About</span>
                    </a>
                    <a>
                        <span>Work</span>
                    </a>
                   <a> 
                     <span>Skills</span>
                   </a>
                    <a> 
                     <span>Contact</span>
                   </a>

                </div>

            </nav>
            <main className="flex relative flex-col px-30 ">
                <section className="flex flex-col justify-center mt-10 p-4 rounded-md gap-2">
                    <div className="flex flex-row items-center justify-center gap-2 border border-gray-800 bg-teal-950 p-1 w-50 rounded-md">
                        <span className=" relative  h-[5px] w-[5px] animate-ping rounded-full bg-green-300 opacity-80"></span>
                        <span className=" text-sm font-thin text-green-300"> AVAILABLE FOR WORK</span>
                    </div>
                    <div className="flex flex-row justify-between gap-3">
                        <span>&copy;TCM-{year}</span>
                        <span className="text-green-300 text-sm animate-pulse">Get in contact</span>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-6xl text-white">TYRONE MRENJE</h1>
                        <h1 className="text-6xl text-[#ff6a00]">Full Stack Developer</h1>
                        <span className="text-xs">Frontend(React || Vue) . Backend(Laravel || Python || Go) . ML(LangChain)</span>
                        <p className="text-sm w-[70%]">I work across backend development and networking, turning business requirements into reliable, scalable systems that can handle real users.</p>
                        <div className="flex flex-row gap-4 mt-8">
                        <button className=" border border-gray-500 p-2 rounded-sm text-xs">Projects</button>
                        <button className="flex flex-row items-center border-thin border-gray-500 p-2 gap-2 text-xs text-gray-900 bg-green-300 rounded-sm">Get in touch <FaArrowRight /></button>
                        </div>  
                    </div> 
                </section>

                 <div className="flex flex-col gap-2 space-y-3 mt-20">
                        <span className="text-[#ff6a00]">About</span>
                        <span className="text-3xl">All About The Developer</span>
                        <p className="text-sm">Code, infrastructure, networks. One engineer tying it together.</p>
                </div>
                <section className="flex flex-row items-center justify-between gap-3 mt-10">                 
                    <div className="flex flex-col items-center border border-gray-600 p-3 rounded-sm gap-2 w-[20%] space-y-4 h-70">
                        <div className="rounded-full bg-[#ff6a00] p-2 w-15 h-15 flex items-center justify-center">
                           <span className="text-md">TM</span>
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
                    <div className="flex flex-col gap-4 p-2 w-[75%]">
                        <p className="tracking-wider text-sm text-pretty">I'm a full-time software developer with a strong backend foundation in Laravel and PostgreSQL, and I round that out with full-stack work in React, TypeScript, and Inertia.js. My approach is foundation-first — I get the schema and backend logic solid before touching the UI, because I'd rather build on something sturdy than patch things together later.

                        </p>
                       
                        <div className="flex flex-row items-center justify-between border-t border-gray-700 gap-2 p-2  mt-5">
                            <span className="text-sm">2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Software Engineer</span>
                                <span className="text-sm">Fiverr</span>                           
                            </div>
                            <span className="text-sm">Freelance</span>
                        </div>    
                        <div className="flex flex-row items-center justify-between border-t border-gray-700 gap-2 p-2">
                            <span className="text-sm">2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Software Engineer</span>
                                <span className="text-sm">Forage</span>
                            </div>
                            <span className="text-sm">Apprentice</span>
                        </div> 
                         <div className="flex flex-row items-center justify-between border-y border-gray-700 gap-2 p-2">
                            <span className="text-sm">2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">IT Intern</span>
                                <span className="text-sm">Swahilipot Hub Foundation</span>
                            </div>
                            <span className="text-sm">Internship</span>
                        </div>              
                    </div>
                </section>
                 <div className="flex flex-col gap-2">
                    <span className="text-[#ff6a00]">Work</span>
                    <span></span>
                    <span></span>
                </div>
                <section className="grid relative grid-rows-3 gap-2">
                    <div className="flex justify-between w-full border-y border-gray-700">
                        <div className="flex flex-col p-2 gap-3 w-full">
                            <h2>Amimo Spices</h2>
                            <p className="text-xs">[E-Commerce Store]</p>
                            <p className="w-[50%] text-pretty text-sm">Online e-commerce store with search capabilities. Whatsapp Ordering Configured</p>
                            <div className="flex flex-row gap-2">
                                <div className="text-xs border border-gray-700 rounded-md p-2">React</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">Laravel</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">PostgreSQL</div>
                            </div>
                       </div>
                       <div>
                         <button className="h-7 w-7">
                            <span>Link</span>
                        </button>
                       </div>
                    </div>
                    <div className="flex justify-between w-full border-b border-gray-700">
                        <div className="flex flex-col p-2 gap-3 w-full">
                            <h2>Amimo Spices</h2>
                            <p className="text-xs">[E-Commerce Store]</p>
                            <p className="w-[50%] text-pretty text-sm">Online e-commerce store with search capabilities. Whatsapp Ordering Configured</p>
                            <div className="flex flex-row gap-2">
                                <div className="text-xs border border-gray-700 rounded-md p-2">React</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">Laravel</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">PostgreSQL</div>
                            </div>
                        </div>
                       <div>
                         <button className="h-7 w-7">
                            <span>Link</span>
                        </button>
                       </div>
                    </div>
                    <div className="flex justify-between w-full border-b border-gray-700">
                        <div className="flex flex-col p-2 gap-3 w-full">
                            <h2>Amimo Spices</h2>
                            <p className="text-xs">[E-Commerce Store]</p>
                            <p className="w-[50%] text-pretty text-sm">Online e-commerce store with search capabilities. Whatsapp Ordering Configured</p>
                            <div className="flex flex-row gap-2">
                                <div className="text-xs border border-gray-700 rounded-md p-2">React</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">Laravel</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">PostgreSQL</div>
                            </div>
                        </div>
                       <div>
                         <button className="h-7 w-7">
                            <span>Link</span>
                        </button>
                       </div>
                    </div>
                      <div className="flex justify-between w-full border-b border-gray-700 ">
                        <div className="flex flex-col p-2 gap-3 w-full">
                            <h2>Amimo Spices</h2>
                            <p className="text-xs">[E-Commerce Store]</p>
                            <p className="w-[50%] text-pretty text-sm">Online e-commerce store with search capabilities. Whatsapp Ordering Configured</p>
                            <div className="flex flex-row gap-2">
                                <div className="text-xs border border-gray-700 rounded-md p-2">React</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">Laravel</div>
                                <div className="text-xs border border-gray-700 rounded-md p-2">PostgreSQL</div>
                            </div>
                        </div>
                       <div>
                         <button className="h-7 w-7">
                            <span>Link</span>
                        </button>
                       </div>
                    </div>                
                </section>

                <section className="flex flex-col">
                    <div className="flex flex-col gap-2">
                        <span>Skills</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="grid grid-cols-3 ">


                    </div>

                </section>

            </main>

        </div>
    )
}