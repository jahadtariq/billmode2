import { motion } from "framer-motion";

import ServiceElement from "../components/service";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="py-10 min-h-screen w-full flex flex-col justify-center items-center gap-14">
        <motion.div
          className="w-contain h-contain py-36 px-10 flex flex-col justify-center items-center text-[55px] leading-[58px] uppercase border-4 border-white rounded-full transition-all"
          style={{ background: 'transparent' }}
          whileHover={{ background: 'radial-gradient(circle at center, #00E0FF 20%, transparent 100%' }}
          transition={{ 
            duration: 1,
            ease:"easeInOut"
           }}
        >
          <h1 className="font-bold">Innovation</h1>
          <h1 className="font-light">At your</h1>
          <h1 className="font-bold">Fingertips</h1>
        </motion.div>
        <motion.div
          className="relative w-full min-h-[230px]"
        >
          <div className="w-full h-full animate-fade">
            <img src="/serviceHero.svg" alt="background" className="w-full h-full"/>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-2 text-[56px] leading-[56px] font-bold uppercase">
            <h1>Explore Our</h1>
            <h1>Offerings.</h1>
          </div>
        </motion.div>
      </section>

      <ServiceElement 
        type="simple"
        icon="/webService.svg"
        iconFilled="/webService.svg"
        heading="web dev"
        paragraph="Billmode's web development services are a game-changer for businesses looking to elevate their online presence. With a team of seasoned experts, they craft bespoke solutions that seamlessly integrate cutting-edge technologies with your brand's unique vision. From custom website design to e-commerce development, and mobile app integration, Billmode ensures your website is not only visually stunning but also highly functional and user-friendly. Whether you're looking to boost your online visibility, drive conversions, or simply create a lasting digital impression, Billmode's web development services deliver results that speak for themselves."
      />

      <ServiceElement 
        type="reverse"
        icon="/brandIcon.svg"
        iconFilled="/webService.svg"
        heading="BRAND DESIGN"
        paragraph="At Billmode, we're more than just a marketing agency - we're brand alchemists, transforming the ordinary into the extraordinary. Our seasoned design team harnesses the power of strategic branding to craft visually stunning, emotionally resonant identities that captivate your audience and leave a lasting impression. From conceptualizing a bold, memorable logo to curating a cohesive brand aesthetic that permeates every touchpoint, we're dedicated to unlocking your brand's true potential."
      />

      <ServiceElement 
        type="simple"
        icon="/seoIcon.svg"
        iconFilled="/webService.svg"
        heading="seo"
        paragraph="We're your strategic partners in conquering the digital frontier. Our comprehensive SEO services are meticulously crafted to propel your business to the forefront of search engine results, leaving your competitors in the dust. Leveraging cutting-edge techniques and a data-driven approach, we'll optimize your website's technical infrastructure, craft captivating content, and build a robust backlink profile - all while keeping a laser-sharp focus on driving tangible results."
      />

      <ServiceElement 
        type="reverse"
        icon="/designIcon.svg"
        iconFilled="/webService.svg"
        heading="web design"
        paragraph="At Billmode, we craft bespoke web designs that seamlessly integrate your brand's unique vision with cutting-edge technologies. Our team of seasoned experts creates visually stunning, highly functional websites that drive conversions and leave a lasting digital impression. Billmode's web design services will elevate your brand's allure and solidify its position in the hearts and minds of your customers."
      />

      <section className="min-h-screen  bg-others bg-center bg-no-repeat w-full mt-10 mb-10 py-10 flex flex-col gap-10">
        <div className="flex items-center justify-center gap-6 w-full">
          <img src="/otherIcon.svg" alt="other-icon-alt-billmode-marketing" className="w-[280px] h-[330px]"/>
          <h1 className="text-[176px] font-bold uppercase leading-[116px]">Others</h1>
        </div>

        <div className="w-full min-h-screen px-32 flex items-center justify-center">
          <div className="max-w-[1300px] max-h-[930px] py-20 px-20 rounded-2xl bg-[#1A2E95]/30 shadow-xl drop-shadow-2xl">
            <div className=" w-full grid grid-cols-3 divide-x-[3px] divide-white/40">
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase border-b-[3px] border-white/40">
                <p className="font-bold text-[36px] leading-[36px]">Website</p>
                <p className="font-light text-[36px] leading-[36px]">Section</p>
                <p className="font-bold text-[36px] leading-[36px]">Editing</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">Wordpress</p>
                <p className="font-light text-[36px] leading-[36px]">ready</p>
                <p className="font-bold text-[36px] leading-[36px]">website</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">check</p>
                <p className="font-light text-[36px] leading-[36px]">website</p>
                <p className="font-bold text-[36px] leading-[36px]">health</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 divide-x-[3px] divide-y-[3px] divide-white/40">
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase border-b-[3px] border-white/40">
                <p className="font-bold text-[36px] leading-[36px]">email</p>
                <p className="font-light text-[36px] leading-[36px]">marketing</p>
                <p className="font-bold text-[36px] leading-[36px]">Campaign</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">social</p>
                <p className="font-light text-[36px] leading-[36px]">media</p>
                <p className="font-bold text-[36px] leading-[36px]">audit</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">marketing</p>
                <p className="font-light text-[36px] leading-[36px]">automation</p>
                <p className="font-bold text-[36px] leading-[36px]">setup</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 divide-x-[3px] divide-y-[3px] divide-white/40">
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">local</p>
                <p className="font-light text-[36px] leading-[36px]">Seo</p>
                <p className="font-bold text-[36px] leading-[36px]">optimization</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">Content</p>
                <p className="font-light text-[36px] leading-[36px]">Gap</p>
                <p className="font-bold text-[36px] leading-[36px]">Analysis</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
                <p className="font-bold text-[36px] leading-[36px]">brands</p>
                <p className="font-light text-[36px] leading-[36px]">competitor</p>
                <p className="font-bold text-[36px] leading-[36px]">analysis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-32 py-10 gap-20 items-center justify-center text-center">
          <p className="font-regular text-[36px] leading-[36px] max-w-[1180px]">From website optimization to social media domination, Billmode's expert team has the tools and expertise to elevate your brand's online presence and drive tangible results. Unlock your business's true growth potential by exploring our full range of digital marketing services – your path to success starts here.</p>
          <Link to={"/"}>
                <img src="/ButtonEmpty.svg" alt="Button-alt-Billmode" className="max-w-[350px] max-h-[110px]"/>
          </Link>
        </div>

      </section>

    </>
  )
}

export default Services;
