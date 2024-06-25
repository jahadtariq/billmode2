
const Hero = () => {
  return (
    <section className="w-full h-contain mt-4 py-6 px-12 lg:mt-6 lg:py-10 lg:px-20 bg-transparent flex flex-col justify-start items-center">
      <div className="w-[300px] h-[225px] md:w-[400px] md:h-[300px] lg:w-[560px] lg:h-[350px] flex justify-center items-start [&>*:nth-child(1)]:hover:bg-yellowLight">
        <div className="bg-whiteLight w-[40%] h-[40%] lg:w-[50%] lg:h-[60%] bg-cover transition duration-700 ease-in-out">
          <div className="w-full h-full flex flex-col justify-start items-center relative group cursor-pointer bg-transparent [&>*:nth-child(1)]:hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAFF00] from-0% to-transparent to-80% transition-color duration-1000 ease-in-out">
            {/* <img src="bulbLight.svg" className="absolute top-0"/> */}
            <img src="bulbBody.svg" className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-full lg:h-full absolute top-6 md:top-8 lg:top-12"/>
            <img src="bulbTick.svg" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px] absolute top-12 md:top-16 lg:top-28"/>
            <img src="bulbUpperSupport.svg" className="absolute top-28 md:top-36 lg:top-64"/>
            <img src="bulbLowerSupport.svg" className="absolute top-36 md:top-44 lg:top-72"/>
          </div>
        </div>
      </div>
      <div className="max-w-[300px] leading-[40px] md:max-w-[400px] md:leading-[50px] lg:max-w-[500px] text-[45px] md:text-[60px] lg:text-[76px] font-extralight uppercase text-center lg:leading-[76px] drop-shadow-xl md:-mt-16 lg:-mt-0">Bring your <span className="font-bold">Idea</span></div>
    </section>
  )
}

export default Hero