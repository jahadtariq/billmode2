import { useState } from "react";
import { Link } from "react-router-dom";

const Hamza = () => {
  const [active, setActive] = useState("about");

  return (
    <>
      <div className="w-full h-[230px] bg-profile bg-no-repeat bg-cover"></div>

      <section className="grid grid-cols-3 gap-10 px-20 pb-20">
        <div className="max-w-[650px] flex items-center justify-center col-span-1">
          <div className="bg-[#070F64]/70 rounded-2xl max-w-[380px] max-h-[770px] flex flex-col items-center justify-center pb-10 mb-6">
            <img src="/ProfileMask.svg" alt="" className=""/>
            <div className="-mt-[70px] bg-blue rounded-full">
              <img src="/Hamza.svg" alt="" className="w-36 h-36 rounded-full"/>
            </div>
            <div className="flex flex-col items-center gap-1 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold">Hamza Sultan</h1>
              <h4 className="text-[16px] font-normal">SEO Specialist</h4>
            </div>
            <div className="flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold text-center uppercase">bio</h1>
              <h4 className="text-[12px] px-8 text-center font-light">SEO Specialist with a proven track record of driving organic growth. With Data-driven approach and technical expertise, I help our clients dominate the search landscape.</h4>
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
                Dominating the Search Landscape: Meet Our SEO Specialist, Hamza
                </p>
                <p>At Billmode, we understand that a strong online presence is the key to unlocking your brand's full potential. That's why we've assembled a team of digital marketing experts, including our resident SEO specialist, Hamza.</p>
                <p>With a deep understanding of the ever-evolving world of search engine optimization, Hamza has honed their skills over the course of [X] years, delivering exceptional results for our clients. Their data-driven approach and technical expertise have become the driving force behind our clients' organic growth, helping them rise to the top of search engine results and captivate their target audience.</p>
                <p>As our SEO specialist, Hamza is responsible for crafting comprehensive strategies that seamlessly integrate cutting-edge techniques with a keen eye for detail. From optimizing website content and structure to building a robust backlink profile, their work ensures that our clients' digital footprint is not only visible but also highly engaging and conversion-driven.</p>
                <p>But Hamza's talents extend far beyond the realm of SEO. They are also a skilled content creator, with a knack for crafting compelling, SEO-optimized copy that resonates with audiences. Their ability to translate complex technical concepts into easily digestible, actionable insights has earned them the respect of both our clients and the wider digital marketing community.</p>
                <p>At Billmode, we are proud to have Hamza as an integral part of our team. Their unwavering dedication, exceptional skills, and innovative mindset make them a driving force behind our mission to help our clients dominate the search landscape and achieve unprecedented growth. If you're looking to connect with this remarkable individual, you can reach them on their LinkedIn profile.</p>
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
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">Keyword Research and Analysis</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl">On-Page Optimization</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">Content Creation and Optimization</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">Link Building and Outreach</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">Technical SEO Audits</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">Local SEO Services</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">SEO Strategy Development</Link>
                <Link to={"/contact"} className="flex items-center justify-center text-[24px] px-4 py-10 leading-[27px] font-semibold bg-gradient-to-r from-[#0009D6] to-[#0C0056] rounded-2xl text-center">SEO Reporting and Analytics</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Hamza;
