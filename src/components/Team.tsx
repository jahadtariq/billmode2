import { Link } from "react-router-dom"
import { teamMembers } from "../constants"

const Team = () => {
  return (
    <section className="min-h-screen p-4 md:px-20 md:py-10 flex flex-col gap-10">
        <div className="w-full flex flex-col gap-6 text-[35px] leading-[35px] md:text-[76px] md:leading-[76px] uppercase items-center justify-center">
            <h1 className="font-bold">meet</h1>
            <h1 className="font-light">our team of</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
            {teamMembers.map((member)=>(
                <Link to={member.link} className="flex flex-col items-center gap-2 hover:scale-110 hover:backdrop-blur-lg hover:bg-white/20 px-10 py-6 transition-all duration-300 ease-in-out rounded-2xl">
                    <div className="w-contain h-contain bg-teambg bg-cover bg-center border-b-[3px] border-white">
                        <img src={member.image} alt="yameen-profile-pic-billmode"/>
                    </div>
                    <h1 className="text-[27px] font-bold leading-[27px] uppercase mt-4">{member.name}</h1>
                    <h1 className="text-[27px] font-thin leading-[27px] uppercase">{member.designation}</h1>
                </Link>
            ))}
        </div>
        <Link to={"/"} className="w-full flex gap-4 text-[35px] leading-[35px] md:text-[76px] md:leading-[76px] uppercase items-center justify-center">
            <p className="font-bold border-b-[4px] border-lightBlue rounded-sm">innovators</p>
            <img src="/ARROW.svg" className="w-[30px] lg:w-[60px]"/>
        </Link>
    </section>
  )
}

export default Team