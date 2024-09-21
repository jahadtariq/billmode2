import { useState } from "react";

import {motion,AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";

const ServiceElement = ({type,icon,heading,iconFilled,paragraph,identityService}: {type: string, icon:string, heading:string, iconFilled:string, paragraph:string, identityService: string}) => {

  const [IsFillImage, setIsFillImage] = useState(false);

  return (
    <section className={`min-h-screen px-4 md:py-10 md:px-20 flex ${ type === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col items-center justify-around mb-10 md:mb-20`} id={`${identityService}`}>

{/* onMouseEnter={()=>setIsFillImage(true)} onMouseLeave={()=>setIsFillImage(false)} */}
        
        <div className="flex flex-col gap-6 items-center justify-center relative h-[420px]">
            <AnimatePresence>
                {!IsFillImage && (
                    <motion.img
                        key="default"
                        src={icon}
                        alt="web-service-icon-billmode"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="block w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[410px] lg:h-[410px]"
                    />
                )}
                {IsFillImage && (
                    <motion.img
                        key="filled"
                        src={iconFilled}
                        alt="web-service-icon-billmode"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="block"
                    />
                )}
            </AnimatePresence>
            <div className="font-bold text-center w-full text-[55px] leading-[65px] md:text-[100px] md:leading-[100px] lg:text-[116px] lg:leading-[116px] uppercase max-w-[470px]">
                {heading}
            </div>
        </div>
        
        <div className="mt-0 md:mt-20 lg:mt-0 flex flex-col gap-10 items-start justify-center max-w-[700px]">
            <p className=" text-[18px] leading-[22px] md:text-[28px] md:leading-[35px] text-justify">{paragraph}</p>
            <Link to={"/"} className="flex items-center justify-center w-full">
                <img src="/ButtonEmpty.svg" alt="Button-alt-Billmode" className="max-w-[200px] max-h-[100px] md:max-w-[350px] md:max-h-[110px]"/>
            </Link>
        </div>
    
    </section>
  )
}

export default ServiceElement;