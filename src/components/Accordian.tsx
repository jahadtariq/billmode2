import React , { useState } from "react"
import { Link } from "react-router-dom";

interface AccordionProps {
    name: string;
    icon: string;
    items: string[];
}

const Accordian: React.FC<AccordionProps> = ({ name, icon, items }) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="relative w-[300px] h-[120px] lg:w-[480px] lg:h-[230px]">
        <img src={icon} className="w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 absolute top-0 left-0"/>
        <div className="absolute z-10 top-3 left-3 lg:top-10 lg:left-10 rounded-2xl backdrop-blur-sm bg-white/15 shadow-2xl w-[290px] h-[130px] lg:w-[432px] lg:h-[183px] flex flex-col gap-6 py-4 px-8">
            <div className="w-full flex justify-end">
                <img src="/plus.svg" className={`w-[16px] h-[16px] lg:w-[23px] lg:h-[23px] cursor-pointer ${isOpen && 'rotate-45'}`} onClick={()=>setIsOpen(!isOpen)}/>
            </div>
            <p className="font-bold text-[24px] leading-[24px] lg:text-[38px] uppercase lg:leading-[38px]">{name}</p>
        </div>
        <div className={`absolute z-20 w-[290px] top-36 left-3 lg:top-60 lg:left-10 lg:w-[432px] h-contain ${isOpen ? 'flex flex-col gap-4' : 'hidden'}`}>
            {items.map((item,index)=>(
                <Link to={"/"} className="rounded-2xl backdrop-blur-sm bg-white/20 shadow-2xl px-8 py-4 text-[20px] uppercase font-semibold">{item}</Link>
            ))} 
        </div>
    </div>
    </>
  )
}

export default Accordian