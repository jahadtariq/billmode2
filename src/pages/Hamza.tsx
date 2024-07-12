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
            <div className="-mt-24">
              <img src="/YameenProfile.svg" alt="" className=""/>
            </div>
            <div className="flex flex-col items-center gap-1 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold">Muhammad Yameen Jilani</h1>
              <h4 className="text-[16px] font-normal">Graphic Designer</h4>
            </div>
            <div className="flex flex-col items-center gap-4 border-b-[2px] border-[#020061] py-6">
              <h1 className="text-[20px] leading-[20px] font-bold text-center uppercase">bio</h1>
              <h4 className="text-[12px] px-8 text-center font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odio atque eos rem dicta, nemo, quis laborum sed autem delectus nulla. Voluptatem in quibusdam ratione!</h4>
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
                Lorem ipsum dolor sit amet consectetur. In molestie elementum eget amet egestas eros. Velit ullamcorper auctor vitae purus diam sit maecenas. Nullam condimentum nisi nisi ornare neque velit. Vitae odio elit tortor est a nulla.
                </p>
                <p>Tempor in nulla vestibulum libero faucibus interdum risus ipsum. Amet at eu tellus adipiscing quis euismod lectus sit aliquet. Cursus at suscipit in et. Pellentesque tempor placerat sit quam. Purus volutpat massa blandit id aliquam lectus. Viverra facilisis morbi nascetur duis quisque neque tortor urna. Magna lectus turpis ullamcorper arcu facilisis.</p>
                <p>Lacus vel amet id lacus vestibulum. Netus auctor egestas hac scelerisque. Eu ut lorem mattis semper arcu neque imperdiet quisque. Nunc aliquet duis elit aliquet pharetra facilisis phasellus. Faucibus amet fringilla purus phasellus enim. Gravida rhoncus tristique praesent tortor sit egestas. Pellentesque vel massa sodales eget mi morbi. Velit faucibus senectus leo ut. Semper tristique tempor at pellentesque facilisis gravida. Risus purus risus nisi eu sed leo risus facilisis varius. Morbi eu sit laoreet diam tempus feugiat. Arcu vitae fames justo venenatis. Vulputate at ac ut pharetra vitae vitae morbi. Urna nunc sollicitudin nulla ut bibendum condimentum aenean viverra.
                In leo nunc nam praesent ac leo ultrices tincidunt. Sit cras tellus augue fermentum nisl magnis elit pellentesque. Egestas risus vitae dictum risus mus vel in. Vitae sit dolor facilisi venenatis tempus. Commodo donec adipiscing eget donec. Dictum neque sit arcu tempus nullam aliquet. Arcu placerat ultrices imperdiet mi in in. Eleifend varius dolor egestas pellentesque tortor pharetra nunc. Faucibus convallis lacinia ipsum pharetra ac.</p>
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

export default Hamza;
