import { Link, useLocation } from "react-router-dom";

import { navLinksOne, navLinksTwo } from "../constants";

import {motion} from "framer-motion";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

  const location = useLocation().pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.section className="w-full py-6 px-12 grid grid-cols-2 md:grid-cols-3 bg-navbg bg-center bg-no-repeat">

      <nav className="hidden md:flex flex-row gap-12 items-center justify-end text-[18px] leading-[27px] tracking-[0.36px]">
        {navLinksOne.map((navLink)=>{

          const isActive = (location.includes(navLink.route) && navLink.route.length > 1 || location === navLink.route);

          return(
            <Link to={navLink.route} className={`${isActive && 'font-semibold'}`}>
              {navLink.label}
            </Link>
          )
        })}
      </nav>

      <p className="flex items-center justify-center uppercase text-center text-[24px] lg:text-[36px] cursor-pointer font-bold">
        Bill<span className="font-extralight">Mode</span>
      </p>

      <nav className="hidden lg:flex flex-row gap-12 items-center justify-start text-[18px] leading-[27px] tracking-[0.36px]">
        {navLinksTwo.map((navLink)=>{

          const isActive = (location.includes(navLink.route) && navLink.route.length > 1 || location === navLink.route);

          return(
            <Link to={navLink.route} className={`${isActive && 'font-semibold'} ${navLink.type === "button" && 'text-green font-semibold'}`}>
              {navLink.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex lg:hidden justify-end items-center w-full">
        <GiHamburgerMenu className="w-6 h-6 cursor-pointer" onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
      </div>

      { isMenuOpen && (
        <div className="flex lg:hidden justify-end items-center w-full absolute top-10 right-10 z-50">
          <IoMdCloseCircle  className="w-10 h-10 cursor-pointer" onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
        </div>
      )}

      {isMenuOpen && (
        <motion.nav 
          initial={{ y: -500 }}
          animate={{ y:0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}  
          id="mobile__nav" className="flex flex-col gap-10 lg:hidden justify-center items-center w-full h-screen absolute top-0 right-0 z-40 bg-[#0D1849] uppercase text-[24px] tracking-wider">
        {navLinksOne.map((navLink)=>{
  
          const isActive = (location.includes(navLink.route) && navLink.route.length > 1 || location === navLink.route);
  
          return(
            <Link to={navLink.route} className={`${isActive && 'font-semibold'}`}>
              {navLink.label}
            </Link>
          )
          })}
          {navLinksTwo.map((navLink)=>{
  
            const isActive = (location.includes(navLink.route) && navLink.route.length > 1 || location === navLink.route);
  
            return(
              <Link to={navLink.route} className={`${isActive && 'font-semibold'} ${navLink.type === "button" && 'text-green font-semibold'}`}>
                {navLink.label}
              </Link>
            )
            })}
        </motion.nav>
      )}
    </motion.section>
  )
}

export default Navbar;