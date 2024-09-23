import { useState } from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";

const Jahad = () => {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="w-full h-[150px] md:h-[230px] bg-profile bg-no-repeat bg-cover"></div>

      <section className="min-w-full md:grid md:grid-cols-3 gap-10 md:px-14 pb-20">
        <div className="max-w-full md:max-w-[650px] flex md:col-span-1 -mt-14 md:mt-0 px-6 md:px-0">
          <div className="bg-[#020061] md:bg-[#070F64]/70 rounded-2xl md:max-w-[380px] max-h-[770px] flex flex-col items-center justify-center pb-10 mb-6 "> 
            <img src="/ProfileMask.svg" alt="" className="w-full"/>
            <div className="-mt-[70px] md:-mt-[44px] lg:-mt-[70px] bg-blue rounded-full">
              <img src="/jahad.svg" alt="" className="w-[135px] h-[135px] md:w-20 md:h-20 lg:w-36 lg:h-36 rounded-full"/>
            </div>
            <div className="flex flex-col items-center gap-1 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold">Muhammad Jahad Tariq</h1>
              <h4 className="text-[16px] font-normal">Full Stack Developer</h4>
            </div>
            <div className="flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold text-center uppercase">bio</h1>
              <h4 className="text-[12px] px-8 text-center font-light">With 4 years of technical experience, I am an analytical and skilled Node.js developer proficient in Next.js, TypeScript, service-oriented architecture, and API integration.</h4>
            </div>
            <div className="w-full flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <div className="w-full px-10 flex items-center justify-between">
                <h1 className="font-light text-[20px]">Services</h1>
                <p className="font-light text-[20px]">10+</p>
              </div>
              <div className="w-full px-10 flex items-center justify-between">
                <h1 className="font-light text-[20px]">Projects</h1>
                <p className="font-light text-[20px]">25+</p>
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
        <div className="w-full col-span-2 flex flex-col gap-20 px-4 md:px-0">
          <div className="flex items-center justify-start gap-10 text-[20px] font-normal px-6 md:px-0">
            <h1 className={`${active === "about" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("about")}>About</h1>
            <h1 className={`${active === "projects" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("projects")}>Projects</h1>
            <h1 className={`${active === "services" ? "font-bold" : "font-normal"} cursor-pointer`} onClick={() => setActive("services")}>Services</h1>
          </div>
          {active === "about" && (
            <div className="flex flex-col gap-6 font-normal text-[20px] leading-[20px] max-w-[700px] -mt-12 px-6 md:px-0">
                <p>
                Introducing Our Versatile Software Engineer: Unlocking Digital Transformation
                </p>
                <p>At Billmode, we take pride in our exceptional team of digital experts, and one such shining star is our talented Software Engineer, Jahad. With an impressive 4 years of technical experience under their belt, Jahad has established themselves as a true master of their craft.</p>
                <p>As an analytical and skilled Node.js developer, Jahad is proficient in a wide range of cutting-edge technologies, including Next.js, TypeScript, service-oriented architecture, and API integration. Their key achievement, which truly showcases their exceptional abilities, is the successful architecture of a scalable application that effortlessly handles an astounding 500,000 daily requests.</p>
                <p>In their current role as a Software Engineer, Jahad is making invaluable contributions to both the frontend and backend development of our web applications, seamlessly blending their technical expertise with a deep understanding of user-centric design. Their commitment to excellence and passion for innovation are truly inspiring.</p>
                <p>But Jahad's talents extend far beyond their impressive technical prowess. They are also a dedicated lifelong learner, constantly exploring new frontiers in the world of technical content writing. Their insatiable curiosity and thirst for knowledge are evident in their active participation in problem-solving on platforms like GeeksforGeeks and their voracious consumption of the latest tech articles.</p>
                <p>
                At Billmode, we are truly fortunate to have Jahad as a integral part of our team. Their unwavering dedication, exceptional skills, and innovative mindset make them a driving force behind our mission to deliver cutting-edge digital solutions that transform our clients' businesses. If you're looking to connect with this remarkable individual, you can reach them on their LinkedIn profile.
                </p>
            </div>
          )}
          {active === "projects" && (
            <section id="yameen" className='w-full flex flex-wrap items-center justify-start gap-8 lg:gap-4 -mt-12 px-6 md:px-0'>
            <ProjectCard
              type="web dev"
              image="image link"
              heading="some project"
              description="some description about the project"
              tags={["web","development"]}
            />
            <ProjectCard
              type="web dev"
              image="image link"
              heading="some project"
              description="some description about the project"
              tags={["web","development"]}
            />
            <ProjectCard
              type="web dev"
              image="image link"
              heading="some project"
              description="some description about the project"
              tags={["web","development"]}
            />
            <ProjectCard
              type="web dev"
              image="image link"
              heading="some project"
              description="some description about the project"
              tags={["web","development"]}
            />
          </section>
          )}
          {active === "services" && (
            <div className="grid md:grid-cols-2 gap-4 px-6 md:px-0 -mt-12">
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Landing Page Development</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Wordpress Development</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Custom Web Application</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Ecommerce Development</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Application Architecture</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Native Mobile Application</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Enhanced API integration</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Re-develop / Re-design website</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Jahad;
