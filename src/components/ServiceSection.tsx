import Accordian from "./Accordian";

import { servicesOne, servicesThree, servicesTwo } from "../constants";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="min-h-screen md:mt-6 md:py-10 px-6 md:px-14 lg:px-28 md:bg-servicebg md:bg-no-repeat md:bg-center md:bg-contain flex flex-col-reverse md:flex-col">

        <div className="min-h-screen grid grid-rows-3 gap-6 justify-center items-center">
        
        <div className="grid md:grid-cols-2 gap-24 items-center">
            {
                servicesOne.map((Service)=>(
                    <Accordian
                        name={Service.name}
                        icon={Service.icon}
                        items={Service.subServices}
                    />
                ))
            }
        </div>
        
        <div className="w-full flex justify-center items-center">
            {
                servicesTwo.map((Service)=>(
                    <Accordian
                        name={Service.name}
                        icon={Service.icon}
                        items={Service.subServices}
                    />
                ))
            }
        </div>
        
        <div className="grid md:grid-cols-2 gap-24 items-center">
            {
                servicesThree.map((Service)=>(
                    <Accordian
                        name={Service.name}
                        icon={Service.icon}
                        items={Service.subServices}
                    />
                ))
            }
        </div>
    
    </div>

    <div className="w-full text-[30px] md:text-[50px] mt-6 mb-14 md:mb-0 md:mt-16 text-center uppercase font-bold leading-[35px] md:leading-[50px] flex items-center justify-center gap-4 flex-wrap lg:text-[76px] lg:leading-[76px] lg:mt-24">
    <span>
            <Link to={"/"} className="flex items-center justify-center gap-4">
                <p className="border-b-[3px] border-[#1E50FF]">Services</p>
                <img src="ARROW.svg" className="w-8 h-8 md:w-12 md:h-12"/>
            </Link>
    </span>
    <span>
    we offer
    </span>
    </div>

    </section>
  )
}

export default ServiceSection;