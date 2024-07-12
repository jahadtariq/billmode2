import { useState } from "react";

import {motion,AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";

const ServiceElement = ({type,icon,heading,iconFilled,paragraph}: {type: string, icon:string, heading:string, iconFilled:string, paragraph:string}) => {

  const [IsFillImage, setIsFillImage] = useState(false);

  return (
    <section className={`min-h-screen py-10 px-20 flex ${ type === "reverse" ? "flex-row-reverse" : "flex-row"} items-center justify-around`}>

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
                        className="block w-[410px] h-[410px]"
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
            <div className="font-bold text-center w-full text-[116px] leading-[116px] uppercase max-w-[470px]">
                {heading}
            </div>
        </div>
        
        <div className="flex flex-col gap-10 items-start justify-center max-w-[700px]">
            <p className="text-[36px] leading-[36px]">{paragraph}</p>
            <Link to={"/"}>
                <img src="/ButtonEmpty.svg" alt="Button-alt-Billmode" className="max-w-[350px] max-h-[110px]"/>
            </Link>
        </div>
    
    </section>
  )
}

export default ServiceElement;