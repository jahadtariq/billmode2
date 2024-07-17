import { useState } from "react";
import { Link } from "react-router-dom";

const Koko = () => {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="w-full h-[230px] bg-profile bg-no-repeat bg-cover"></div>

      <section className="grid grid-cols-3 gap-10 px-20 pb-20">
        <div className="max-w-[650px] flex items-center justify-center col-span-1">
          <div className="bg-[#070F64]/70 rounded-2xl max-w-[380px] max-h-[770px] flex flex-col items-center justify-center pb-10 mb-6">
            <img src="/ProfileMask.svg" alt="" className=""/>
            <div className="-mt-[70px] bg-blue rounded-full">
              <img src="/Phillipe.svg" alt="" className="w-36 h-36 rounded-full"/>
            </div>
            <div className="flex flex-col items-center gap-1 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold">Koko Phillipe Agbonson</h1>
              <h4 className="text-[16px] font-normal">CEO & Strategist</h4>
            </div>
            <div className="flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold text-center uppercase">bio</h1>
              <h4 className="text-[12px] px-8 text-center font-light">Founder and CEO of Billmode, a content marketing agency that helps creators and brands build a strong social media presence. As a former marketing strategist, I expertise in social media and content creation to drive results for he clients</h4>
            </div>
            <div className="w-full flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <div className="w-full px-10 flex items-center justify-between">
                <h1 className="font-light text-[20px]">Services</h1>
                <p className="font-light text-[20px]">20+</p>
              </div>
              <div className="w-full px-10 flex items-center justify-between">
                <h1 className="font-light text-[20px]">Projects</h1>
                <p className="font-light text-[20px]">100+</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-6">
              <h1 className="font-bold text-[16px]">Reach Out</h1>
              <div className="pt-6 pb-20 grid grid-cols-3 gap-y-8 gap-x-20">
                <img src="/Behance.svg" alt="" className="w-[34px] h-[34px]"/>
                <img src="/SocailDiscord.svg" alt="" className="w-[34px] h-[34px]"/>
                <img src="/SocailInsta.svg" alt="" className="w-[34px] h-[34px]"/>
                <img src="/Social.svg" alt="" className="w-[34px] h-[34px]"/>
                <img src="/SocialFacebook.svg" alt="" className="w-[34px] h-[34px]"/>
                <img src="/SocialTwitter.svg" alt="" className="w-[34px] h-[34px]"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 flex flex-col gap-20">
          <div className="flex items-center justify-start gap-10 text-[20px] font-normal">
            <h1 className={`${active === "about" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("about")}>About</h1>
            {/* <h1 className={`${active === "services" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("services")}>Services</h1> */}
          </div>
          {active === "about" && (
            <div className="flex flex-col gap-6 font-normal text-[20px] leading-[20px] max-w-[700px]">
                <p>
                Koko Phillipe Agbonson is the Founder and CEO of Billmode, a content marketing agency that helps creators and brands build a strong social media presence. As a former Division I athlete and marketing strategist, Koko leverages his expertise in social media and content creation to drive results for his clients.
                </p>
                <p>With a deep understanding of the ever-evolving digital landscape, Koko has established Billmode as a trailblazer in the content marketing industry. His innovative approach combines data-driven insights, creative storytelling, and a keen eye for social media trends to help his clients captivate their target audiences and achieve their business goals.</p>
                <p>Koko's passion for empowering others shines through in his work. He takes the time to understand the unique needs and aspirations of each client, tailoring Billmode's services to unlock their full potential. Whether it's a rising creator looking to build a loyal following or an established brand seeking to reinvent its digital presence, Koko and he team are dedicated to delivering transformative results.</p>
                <p>In addition to he role as Billmode's CEO, Koko is a sought-after keynote speaker and an influential Instagram influencer with over 50,000 followers.His diverse background, which includes a stint as a Division I athlete and experience as a marketing strategist, has equipped him with a unique perspective that he leverages to inspire and empower othes.</p>
                <p>Koko's commitment to innovation and impact extends beyond he work at Billmode. He is a self-proclaimed biohacking enthusiast and is passionate about incorporating wellness and self-care practices into he daily routine. This holistic approach to personal and professional development has not only fueled he own success but also serves as a testament to his belief in the power of a balanced and purposeful life.
                As Billmode continues to grow and evolve, Koko remains at the forefront, leading his team with unwavering dedication and a vision to transform the content marketing landscape. He relentless pursuit of excellence, coupled with he genuine desire to empower his clients, make him a true force to be reckoned with in the industry.</p>
            </div>
          )}
          {/* {active === "services" && (
            <div className="grid grid-cols-2 gap-4">
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Style Guidlines</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Logo Designing</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Social Media Designing</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">2D/3D Animation</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Web Design</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Flyer/Banner Design</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Video Editing</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Problem Solving</Link>
            </div>
          )} */}
        </div>
      </section>
    </>
  );
}

export default Koko;
