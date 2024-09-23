import { useState } from "react";

import { Link } from "react-router-dom";

const ProjectCard = ({ type , image , heading , description , tags }: {type: string, image:string, heading:string, description:string, tags: string[]}) => {

  return (
    <Link to={'/'}>
        <div className="w-[400px] h-[400px] flex flex-col bg-[#0D1849] rounded-xl p-4 shadow-md shadow-black hover:shadow-[#2d334c]">
            <div className="w-full h-[60%] bg-white/30 rounded-lg"></div>
            <p className="text-[10px] uppercase mt-4 text-white/70">{type}</p>
            <p className="text-[24px] font-bold uppercase">{heading}</p>
            <p className="text-[14px] font-normal">{description}</p>
            <div className="flex flex-wrap gap-2 items-center justify-start mt-4">
                { tags.map((tag) => (
                    <p key={tag} className="text-[10px] uppercase bg-[#2d334c] px-4 py-2 rounded-lg">{tag}</p>
                ))}
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard;