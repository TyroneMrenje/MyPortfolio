
import { useState } from "react";
import { MdOutlineMenu, MdCancel } from "react-icons/md";

export default function Navbar(){

     const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <nav >
           <div className="flex items-center justify-between position-fixed top-0 w-full text-white border-b border-gray-700 border/40 p-5 z-10">
                <div>
                    <span className="text-md">Tyrone&nbsp;Mrenje</span>
                </div>
                <div className=" hidden md:flex flex-row text-sm gap-4">
                    <a href="#about">
                        <span >About</span>
                    </a>
                    <a href="#work">
                        <span>Work</span>
                    </a>
                    <a href="#skills"> 
                        <span>Skills</span>
                    </a>
                    <a href="#contact"> 
                        <span>Contact</span>
                    </a>
                </div>
                {isOpen ?
                   <button
                    onClick={toggleDropdown}
                    className="md:hidden relative mr-5 mt-2 rounded-md text-white"
                    aria-label="Toggle menu"
                    >
                    <MdCancel className="h-7 w-7" />
                    </button>   

                    :
                <button
                    onClick={toggleDropdown}
                    className="md:hidden relative mr-5 mt-2 rounded-md text-white"
                    aria-label="Toggle menu"
                >
                  <MdOutlineMenu className="h-7 w-7" />
                </button>    
                } 
          </div>
           {isOpen && (
          <div className="md:hidden w-full">
            <div className="flex absolute z-10 flex-col bg-[#1f2432] space-y-4 p-4  w-full items-center text-md text-white">
              <a href="#about"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                About
              </a>
              <a
                href="#work"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                Work
              </a>
              <a href="#skills"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                Skills
              </a>
              <a href="#contact"
                className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-150 after:origin-left hover:after:scale-x-100"
                onClick={toggleDropdown}
              >
                Contact
              </a>
            </div>
          </div>
        )}
        </nav>
    )
} 
