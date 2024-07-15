import { useState } from "react";
import { Link } from "react-router-dom";

const Yameen = () => {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="w-full h-[230px] bg-profile bg-no-repeat bg-cover"></div>

      <section className="grid grid-cols-3 gap-10 px-20 pb-20">
        <div className="max-w-[650px] flex items-center justify-center col-span-1">
          <div className="bg-[#070F64]/70 rounded-2xl max-w-[380px] max-h-[770px] flex flex-col items-center justify-center pb-10 mb-6">
            <img src="/ProfileMask.svg" alt="" className=""/>
            <div className="-mt-24">
              <img src="/YameenProfile.svg" alt="" className=""/>
            </div>
            <div className="flex flex-col items-center gap-1 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold">Muhammad Yameen Jilani</h1>
              <h4 className="text-[16px] font-normal">Graphic Designer</h4>
            </div>
            <div className="flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold text-center uppercase">bio</h1>
              <h4 className="text-[12px] px-8 text-center font-light">Talented Graphic Designer with 5 years of experience. I craft visually stunning designs that elevate brands and captivate audiences.</h4>
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
            <h1 className={`${active === "projects" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("projects")}>Projects</h1>
            <h1 className={`${active === "services" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("services")}>Services</h1>
          </div>
          {active === "about" && (
            <div className="flex flex-col gap-6 font-normal text-[20px] leading-[20px] max-w-[700px]">
                <p>
                Crafting Visually Stunning Masterpieces: Meet Our Graphic Design Extraordinaire
                </p>
                <p>At Billmode, we believe that great design has the power to captivate, inspire, and transform. That's why we've assembled a team of the most talented graphic designers in the industry, and one such creative genius is Yameen.</p>
                <p>With a keen eye for detail and an innate understanding of color, typography, and composition, Yameen has honed their skills over the course of their impressive career, which spans 5 years. Their passion for design is evident in every pixel they manipulate, as they effortlessly blend cutting-edge techniques with a deep understanding of brand identity and user experience.</p>
                <p>As our resident graphic design expert, Yameen is responsible for crafting visually stunning masterpieces that elevate our clients' brands to new heights. From conceptualizing bold, memorable logos to curating cohesive brand aesthetics that permeate every touchpoint, their work is a testament to their creativity and technical prowess.</p>
                <p>But Yameen's talents extend far beyond the realm of graphic design. They are also a skilled illustrator, with a portfolio that showcases their ability to bring even the most abstract concepts to life through the power of visual storytelling. Their work has been featured in various publications and exhibitions, earning them recognition and acclaim from their peers and industry leaders alike.</p>
                <p>
                At Billmode, we are proud to have Yameen as a integral part of our team. Their unwavering dedication, exceptional skills, and innovative mindset make them a driving force behind our mission to deliver visually stunning, emotionally resonant designs that captivate audiences and drive results. If you're looking to connect with this remarkable individual, you can reach them on their Behnace profile.
                </p>
            </div>
          )}
          {active === "projects" && (
            <section id="yameen" className='flex flex-wrap gap-8 lg:gap-4 mt-6'>
            <iframe src="https://www.behance.net/embed/project/183104851?ilo0=1" height="280" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe src="https://www.behance.net/embed/project/164799589?ilo0=1" height="280" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe src="https://www.behance.net/embed/project/164165101?ilo0=1" height="280" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe src="https://www.behance.net/embed/project/161520213?ilo0=1" height="280" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
            <iframe src="https://www.behance.net/embed/project/158977405?ilo0=1" height="280" width="360" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
          </section>
          )}
          {active === "services" && (
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
          )}
        </div>
      </section>
    </>
  );
}

export default Yameen;
