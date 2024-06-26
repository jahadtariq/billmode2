import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full h-contain mt-4 py-6 px-6 lg:mt-6 lg:py-20 lg:px-20 flex flex-col-reverse justify-center items-center gap-6 md:grid md:grid-cols-3">

        <div className="mt-10 lg:mt-0 col-span-1 flex flex-col gap-8 lg:gap-10 justify-center items-center">
          <img src="/logo.svg" className="w-[140px] h-[140px] lg:w-[162px] lg:h-[162px]"/>
          <p className="text-[45px] leading-[30px] lg:text-[56px] lg:leading-[41px] text-center font-bold uppercase">
            Bill<span className="font-extralight">mode</span>
          </p>
        </div>
        
        <div className="col-span-2 flex flex-col lg:pl-24 items-start justify-center gap-4 lg:gap-10">
          <h1 className="uppercase text-[40px] lg:text-[76px] lg:leading-[72px] font-bold">about us</h1>
          <div className="flex flex-col gap-3">
          <p className="text-[16px] font-extralight leading-[20px] max-w-[670px] text-justify">At BILLMODE, we understand the nuanced art of crafting a compelling brand identity that resonates with your target audience. Our seasoned team of experts is committed to delivering bespoke solutions tailored to your unique brand vision. From strategic brand positioning to impactful visual design and consistent messaging, we are equipped to guide you through every facet of the brand-building process.</p>
          <p className="uppercase font-normal max-w-[670px] leading-[20px] text-justify">Let us be the catalyst for your brand's success, and together, we'll build a powerful and enduring brand legacy.</p>
          </div>
          <Link to="/about" className="flex gap-2 lg:gap-6 items-center mt-6">
            <p className="text-[20px] leading-[20px] lg:text-[76px] lg:leading-[72px] font-extralight border-b-[4px] border-[#1E50FF]">more about us</p>
            <img src="/ARROW.svg" className="w-[30px] lg:w-[60px]"/>
          </Link>
        </div>

      </section>
  )
}

export default About;