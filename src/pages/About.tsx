import Team from "../components/Team";

const About = () => {
  return (
    <>
      <section className="min-h-screen p-4 mt-10 md:mt-0 lg:px-[170px] lg:py-[40px] flex flex-col gap-[56px] items-center">
        <img src="/logo.svg" alt="billmode-logo" className="w-[134px] h-[134px]"/>
        <div className="flex flex-col gap-10 text-[16px] md:text-[24px] font-light text-center">
          <p>We <span className="font-semibold">specialize</span> in transforming your ideas into thriving online businesses. Whether you're starting <span className="font-semibold">from scratch</span> with simple design concepts or need a complete website design, our team is here to bring your vision to life. We offer a comprehensive suite of services, including website optimization, SEO, and social media management, tailored to meet the needs of both new and existing businesses.</p>
          <p>For those looking to refresh or <span className="font-semibold">enhance</span> their brand, <span className="font-semibold uppercase">BILLMODE</span> provides expert branding services, including logo design, brand guides, and more. Our goal is to ensure your online presence is not only beautiful but also highly effective. Trust BILLMODE to <span className="font-semibold">elevate</span> your business with professional, customized solutions that <span className="font-semibold">drive success</span>.</p>
        </div>
        <h1 className="text-[35px] leading-[35px] md:text-[72px] md:leading-[72px] font-extralight uppercase"><span className="font-bold">Bill</span>mode</h1>
      </section>
      <Team/>
      <section className="min-h-screen"></section>
    </>
  )
}

export default About;