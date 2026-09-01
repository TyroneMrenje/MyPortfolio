



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
            <div className="flex relative flex-col px-30 ">
                <div className="flex flex-col justify-center mt-10">
                    <div className="flex flex-row items-center gap-2">
                        <span className=" relative inline-flex h-[6px] w-[6px] animate-ping rounded-full bg-green-300 opacity-70"></span>
                        <span className="text-sm font-thin"> AVAILABLE FOR WORK</span>
                    </div>
                    <div>
                      <div className="flex flex-row justify-between">
                        <span>&copy;TCM-{year}</span>
                        <span>Get in contact</span>
                      </div>
                      <h1 className="text-[50px]">TYRONE MRENJE</h1>
                      <h1 className="text-[50px]">Full Stack Developer</h1>
                      <p className="text-md">Frontend(React || Vue) . Backend(Laravel || Python || Go) . ML(LangChain)</p>
                      <p className="text-md w-[70%]">I work across backend development and networking, turning business requirements into reliable, scalable systems that can handle real users.</p>
                      <div className="flex flex-row gap-4">
                        <button className="border border-gray-800 p-4 rounded-sm">Projects</button>
                        <button className="border border-gray-800 p-4 rounded-sm">Get in touch</button>
                      </div>   
                    </div>
                </div>

                 <div className="flex flex-col gap-2">
                        <span>About</span>
                        <span></span>

                </div>
                <div className="flex flex-row items-center justify-between gap-4">                 
                    <div className="flex flex-col items-center border border-gray-800 p-4 rounded-sm gap-2">
                        <div className="rounded-full bg-[#ff6a00] p-2 w-15 h-15 flex items-center justify-center">
                           <span className="text-md">TM</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span>Experience</span>
                            <span>2+ years</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span>Frontend</span>
                            <span>React | Vue</span>
                        </div>
                         <div className="flex flex-row gap-2">
                            <span>Backend</span>
                            <span>Laravel | Python</span>
                        </div>
                        <div className="flex flex-row">
                            <span>DB</span>
                            <span>Postgresql</span>
                            <span>MySQL</span>
                            <span>Redis</span>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 p-2 w-[80%]">
                        <p className="tracking-wide text-sm">I'm a full-time software developer with a strong backend foundation in Laravel and PostgreSQL, and I round that out with full-stack work in React, TypeScript, and Inertia.js. My approach is foundation-first — I get the schema and backend logic solid before touching the UI, because I'd rather build on something sturdy than patch things together later.

                        </p>
                        <p className="tracking-wide text-sm">Database design & security — schema architecture, indexing for performance, and Row-Level Security done right, including navigating the trickier constraints of connection poolers like PgBouncer</p>
                        <p className="tracking-wide text-sm">Payments & transactional systems — wiring up third-party payment providers into real, production-ready flows</p>
                        <p className="tracking-wide text-sm">
                            Full-stack delivery — bridging Laravel backends to React/TypeScript frontends via Inertia.js, and going deep on framework quirks rather than stopping at surface-level familiarit
                        </p>
                        <div className="grid grid-cols-2 grid-[1fr_2fr] border-t border-gray-700 gap-2 p-2 items-center">
                            <span>2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Software Engineer</span>
                                <span className="text-sm">Fiverr</span>
                            </div>
                        </div>    
                        <div className="grid grid-cols-2 grid-[1fr_2fr] border-y border-gray-700 gap-2 p-2 items-center">
                            <span>2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Software Engineer</span>
                                <span className="text-sm">Fiverr</span>
                            </div>
                        </div> 
                         <div className="grid grid-cols-2 grid-[1fr_2fr] border-b border-gray-700 gap-2 p-2 items-center">
                            <span>2025 - Present</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm">Software Engineer</span>
                                <span className="text-sm">Fiverr</span>
                            </div>
                        </div>              
                    </div>

                </div>
                <div>
                    
                </div>

            </div>

        </div>
    )
}