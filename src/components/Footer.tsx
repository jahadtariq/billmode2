import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#0D1849] w-full h-contain px-4 py-4 lg:py-10 lg:px-16 flex flex-col-reverse gap-16 md:grid lg:grid-cols-7">

      <div className="col-span-3 flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          
          <div className="flex flex-row items-center gap-4">
            <img src="/logo.svg" className="w-[50px] h-[50px]"/>
            <p className="uppercase text-[36px] leading-[41px] font-bold ">Bill<span className="font-extralight">Mode</span></p>
          </div>
        
          <div className="flex flex-row gap-4 items-center">
            <Link to="/"><img src="/Facebook.svg" className="w-[35px] h-[35px]"/></Link>
            <Link to="/"><img src="/Twitter.svg" className="w-[35px] h-[35px]"/></Link>
            <Link to="/"><img src="/Linkedin.svg" className="w-[35px] h-[35px]"/></Link>
          </div>

          <p className="text-[12px] leading-[15px] font-light mt-20">&copy; 2024 BILLMODE Reserved</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="font-bold text-[16px]">Product</h2>
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Landingpage</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Features</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Documentation</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Referral Program</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Pricing</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="font-bold text-[16px]">Services</h2>
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Documentation</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Design</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Themes</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Illustrations</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">UI Kit</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="font-bold text-[16px]">Company</h2>
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-[14px] font-normal leading-[34px]">About</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Terms</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Privacy Policy</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Careers</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-8">
        <h2 className="font-bold text-[16px]">More</h2>
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Documentation</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">License</Link>
          <Link to="/" className="text-[14px] font-normal leading-[34px]">Changelog</Link>
        </div>
      </div>

    </section>
  )
}

export default Footer;