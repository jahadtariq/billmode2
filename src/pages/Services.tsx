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
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi id quaerat laudantium magni rem accusamus veritatis non vel obcaecati ex, nobis porro, eum nam quisquam a cupiditate facere veniam recusandae quo, necessitatibus vero! Aliquam reprehenderit aliquid animi eius, dignissimos perspiciatis ad amet in cumque!"
      />

      <ServiceElement 
        type="reverse"
        icon="/brandIcon.svg"
        iconFilled="/webService.svg"
        heading="BRAND DESIGN"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi id quaerat laudantium magni rem accusamus veritatis non vel obcaecati ex, nobis porro, eum nam quisquam a cupiditate facere veniam recusandae quo, necessitatibus vero! Aliquam reprehenderit aliquid animi eius, dignissimos perspiciatis ad amet in cumque!"
      />

      <ServiceElement 
        type="simple"
        icon="/seoIcon.svg"
        iconFilled="/webService.svg"
        heading="seo"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi id quaerat laudantium magni rem accusamus veritatis non vel obcaecati ex, nobis porro, eum nam quisquam a cupiditate facere veniam recusandae quo, necessitatibus vero! Aliquam reprehenderit aliquid animi eius, dignissimos perspiciatis ad amet in cumque!"
      />

      <ServiceElement 
        type="reverse"
        icon="/designIcon.svg"
        iconFilled="/webService.svg"
        heading="web design"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi id quaerat laudantium magni rem accusamus veritatis non vel obcaecati ex, nobis porro, eum nam quisquam a cupiditate facere veniam recusandae quo, necessitatibus vero! Aliquam reprehenderit aliquid animi eius, dignissimos perspiciatis ad amet in cumque!"
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
              <div className="flex flex-col items-center justify-center text-center p-12 uppercase">
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
          </div>
        </div>

        <div className="flex flex-col px-32 py-10 gap-20 items-center justify-center text-center">
          <p className="font-regular text-[36px] leading-[36px] max-w-[1180px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eveniet? Molestiae facilis sapiente animi, quae nisi vitae corrupti doloribus, distinctio nostrum, quisquam cumque iste mollitia cupiditate omnis vero optio eum odit illo expedita? Iste ab nam esse nemo saepe possimus.</p>
          <Link to={"/"}>
                <img src="/ButtonEmpty.svg" alt="Button-alt-Billmode" className="max-w-[350px] max-h-[110px]"/>
          </Link>
        </div>

      </section>

    </>
  )
}

export default Services;
