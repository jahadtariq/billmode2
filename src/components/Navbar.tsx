import { Link, useLocation } from "react-router-dom";

import { navLinksOne, navLinksTwo } from "../constants";

import {motion} from "framer-motion";

const Navbar = () => {

  const location = useLocation().pathname;

  return (
    <motion.section className="w-full py-6 px-12 grid grid-cols-3 bg-navbg bg-center bg-no-repeat">

      <nav className="hidden lg:flex flex-row gap-12 items-center justify-end text-[18px] leading-[27px] tracking-[0.36px]">
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

      <nav id="mobile__nav" className="flex lg:hidden justify-end items-center">
        Menu
      </nav>
    </motion.section>
  )
}

export default Navbar;