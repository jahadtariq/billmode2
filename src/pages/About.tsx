import Team from "../components/Team";

import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="min-h-screen p-4 mt-10 md:mt-0 lg:px-[170px] lg:py-[40px] flex flex-col gap-[56px] items-center">
        <motion.img 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }} 
          src="/logoColor.svg" 
          alt="billmode-logo" 
          className="w-[164px] h-[164px]"
        />
        <div className="flex flex-col gap-10 text-[16px] md:text-[24px] font-light text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            }} 
          >We <span className="font-semibold">specialize</span> in transforming your ideas into thriving online businesses. Whether you're starting <span className="font-semibold">from scratch</span> with simple design concepts or need a complete website design, our team is here to bring your vision to life. We offer a comprehensive suite of services, including website optimization, SEO, and social media management, tailored to meet the needs of both new and existing businesses.</motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              ease: "easeInOut",
            }} 
          >
            For those looking to refresh or <span className="font-semibold">enhance</span> their brand, <span className="font-semibold uppercase">BILLMODE</span> provides expert branding services, including logo design, brand guides, and more. Our goal is to ensure your online presence is not only beautiful but also highly effective. Trust BILLMODE to <span className="font-semibold">elevate</span> your business with professional, customized solutions that <span className="font-semibold">drive success</span>.</motion.p>
        </div>
        <motion.h1
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 3,
            ease: "easeInOut",
          }} 
          className="text-[35px] leading-[35px] md:text-[72px] md:leading-[72px] font-extralight uppercase"><span className="font-bold">Bill</span>mode</motion.h1>
      </section>

      <Team/>

      <section className="min-h-dvh w-full bg-workflow bg-contain bg-no-repeat p-4 md:mt-20 md:py-10 md:px-20 bg-center flex items-center justify-center">
        <div className="relative -ml-56 -mt-20 md:-ml-96 md:-mt-24 bg-decoration bg-cover w-[70px] h-[70px] md:w-[150px] md:h-[150px]">
          <div className="absolute top-8 left-8 md:top-10 md:left-10 text-[30px] leading-[30px] md:text-[72px] flex flex-col gap-0 font-bold md:leading-[72px] uppercase max-w-[550px]">
            <h1>Work-</h1>
            <h1>-flow</h1>
          </div>
        </div>        
      </section>

      <section className="md:py-8 -mt-20 md:-mt-0">
        <div className="logos group relative overflow-hidden whitespace-nowrap flex justify-between items-center gap-20 md:gap-52 lg:gap-96 py-6 lg:py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left group-hover:animation-pause flex justify-between gap-20 md:gap-52 lg:gap-96 items-center w-max uppercase">
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">Innov-</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">-Ation</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">Innov-</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">-Ation</h1>
          </div>

          <div className="animate-slide-left group-hover:animation-pause flex justify-between gap-20 md:gap-52 lg:gap-96 items-center w-max uppercase" aria-hidden="true">
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">Innov-</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">-Ation</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">Innov-</h1>
            <h1 className="font-bold text-[40px] leading-[40px] md:text-[90px] md:leading-[90px] lg:text-[144px] lg:leading-[144px] text-white/20">-Ation</h1>
          </div>
        </div>
      </section>

      <section className="h-contain py-10 px-4 md:px-16 lg:px-20 flex flex-col gap-10 mb-20">
        <div className="w-full flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center w-contain h-contain uppercase gap-0">
            <h1 className="text-[30px] leading-[30px] md:text-[60px] md:leading-[60px] lg:text-[100px] font-light lg:leading-[144px]">Why choose</h1>
            <h1 className="text-[38px] leading-[38px] lg:text-[128px] font-bold lg:leading-[144px] lg:-mt-8 md:text-[75px] md:leading-[75px]">billmode</h1>
            <motion.div 
            animate={{ y: 10, rotateZ:10, rotateX: 10 }} 
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1
            }}
            className="bg-transparent absolute -top-8 -right-14 md:-top-16 md:-right-32 lg:-right-48 w-[80px] h-[80px] md:w-[200px] md:h-[200px] lg:w-[285px] lg:h-[385px]">
              <img src="/question.svg" alt=""/>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
          <p className="max-w-[890px] text-[18px] leading-[20px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[42px] font-thin text-center">Cuz we don't just bring your ideas to life; we elevate them into <span className="font-semibold">standout brands</span>. Our holistic approach, from concept development to full-scale implementation, ensures your vision not only becomes a reality but also stands out in a crowded marketplace. <span className="font-semibold">Choose BILLMODE</span>, and watch your brand thrive with creativity, precision, and a passion for excellence.</p>
        </div>
      </section>
    </>
  )
}

export default About;