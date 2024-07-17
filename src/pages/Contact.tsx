import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaDiscord, FaPhoneAlt, FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { MdMail } from "react-icons/md";


const Contact = () => {
  return (
    <>
      <section className="h-contain p-4 md:py-10 md:px-20 w-full flex flex-col gap-20 items-center justify-center">
        <div className="w-full h-contain bg-gradient-to-b from-blue via-lightBlue/20 to-blue backdrop-blur-lg rounded-2xl px-6 py-16 md:px-20 md:py-28 shadow-lg">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-stars bg-left-top bg-no-repeat">
            <div className="flex flex-col gap-10">
              <div className="text-[56px] uppercase leading-[76px] font-bold">Let's Know</div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">First Name</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter First Name"/>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Email</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter Email"/>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Project Type</p>
                <input type="text" className="px-3 py-4 rounded-[12px] bg-blue border-none text-[16px] font-light placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light" placeholder="Enter Project Type like UI/UX design"/>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[16px] font-normal">Message</p>
                <textarea className="rounded-[12px] px-3 py-4 min-h-[200px] bg-blue border-[1px] border-lightBlue/30 placeholder:text-[16px] placeholder:text-white/60 placeholder:font-light text-[16px] font-light" placeholder="Enter Your Message"/>
              </div>
              <div className="bg-lightBlue text-white w-full h-contain py-4 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gradient-to-br from-lightblue to-blue transition-colors duration-300 ease-in-out">Send Your Message</div>
            </div>

            <div className="border-[1px] border-lightBlue/30 rounded-lg w-full flex flex-col gap-[40px] items-center justify-center backdrop-blur-md py-[40px] px-[30px] md:px-[60px] bg-blue/70">
              
              <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
                <div className="flex items-center justify-center">
                  <MdMail className="w-24 h-24 p-4 backdrop-blur-xl shadow-md shadow-lightBlue border-[1px] border-lightBlue/30 rounded-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[16px] font-semibold">Send Us a Mail</h1>
                  <p className="text-[16px] font-regular max-w-[277px] text-white/60">Feel Free to Reach Out to Us on Below Email ID</p>
                  <Link to={"mailto:inquiry@billmode.net?subject=Inquiry%20from%20website"} className="flex items-center justify-center bg-gradient-to-r from-lightBlue/20 to-blue p-4 rounded-lg border-[1px] border-lightBlue/20">inquiry@billmode.net</Link>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
                <div className="flex items-center justify-center">
                  <FaPhoneAlt  className="w-24 h-24 p-4 backdrop-blur-xl shadow-md shadow-lightBlue border-[1px] border-lightBlue/30 rounded-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[16px] font-semibold">Give Us a Call</h1>
                  <p className="text-[16px] font-regular max-w-[277px] text-white/60">Feel Free to Reach Out to Us on Below Number</p>
                  <div className="flex items-center justify-center bg-gradient-to-r from-lightBlue/20 to-blue p-4 rounded-lg border-[1px] border-lightBlue/20">+ 44 - 0208 - 0364 - 978</div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
                <div className="flex items-center justify-center">
                  <FaLocationArrow  className="w-24 h-24 p-4 backdrop-blur-xl shadow-md shadow-lightBlue border-[1px] border-lightBlue/30 rounded-full" />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[16px] font-semibold">Location</h1>
                  <p className="text-[16px] font-regular max-w-[277px] text-white/60">71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
                  <Link to={"https://maps.app.goo.gl/crPrECA3GuaQ1gxp7"} className="flex gap-2 items-center justify-center bg-gradient-to-r from-lightBlue/20 to-blue p-4 rounded-lg border-[1px] border-lightBlue/20">
                    <p>Get Direction</p>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className="w-full h-contain bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lightBlue/50 from-0% to-blue/20 to-80% rounded-t-[70px] rounded-b-2xl px-6 py-10 md:px-20 md:py-10 flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-center bg-stars bg-cover bg-no-repeat flex flex-col items-center justify-center gap-6 text-white">
            <div className="flex justify-center items-center gap-4 rounded-full broder-[1px] border-blue bg-gradient-to-tr from-white/10 to-black/10 p-6 border-[1px] border-black/20 shadow-xl">
              <Link to={"/"} className="p-2 rounded-full border-[1px] border-lightBlue/90 backdrop-blur-sm bg-white/10 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-2 md:p-4 rounded-full border-[1px] border-black/20 backdrop-blur-sm bg-black/10">
                  <FaInstagram className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                </div>
              </Link>
              <Link to={"/"} className="p-2 rounded-full border-[1px] border-lightBlue/90 backdrop-blur-sm bg-white/10 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-2 md:p-4 rounded-full border-[1px] border-black/20 backdrop-blur-sm bg-black/10">
                  <FaTwitter className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                </div>
              </Link>
              <Link to={"/"} className="p-2 rounded-full border-[1px] border-lightBlue/90 backdrop-blur-sm bg-white/10 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-2 md:p-4 rounded-full border-[1px] border-black/20 backdrop-blur-sm bg-black/10">
                  <FaFacebook className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                </div>
              </Link>
              <Link to={"/"} className="p-2 rounded-full border-[1px] border-lightBlue/90 backdrop-blur-sm bg-white/10 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-2 md:p-4 rounded-full border-[1px] border-black/20 backdrop-blur-sm bg-black/10">
                  <FaDiscord className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                </div>
              </Link>
            </div>
            <div className="text-[30px] text-center leading-[30px] md:leading-[50px] md:text-[50px] font-bold mb-2 md:mb-0">Let's Connect and Create</div>
            <div className="text-[16px] font-light text-center uppercase -mt-4">it's time to open the door to the incredible world of marketing - rebuild or expand your brand with us.</div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact;