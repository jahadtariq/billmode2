import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectsInfo } from "../constants";

const TypewriterEffect = ({ text }:any) => {
  return (
    <motion.div>
      {text.split("").map((letter:any, index:any) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.02, ease: "easeInOut", delay: index * 0.02 }}
          className="inline-block mr-[1px]"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = projectsInfo.length;

  const nextProject = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 1 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, duration: 0.5 }
    }
  };

  return (
    <div className="relative w-full h-contain flex gap-96 flex-nowrap overflow-hidden">
      <div className="flex w-full">
        <div className="project min-w-full min-h-[60vh] grid grid-cols-2">
          <motion.div
            className="flex flex-col gap-4 text-[24px] leading-[32px] font-light max-w-[500px] ml-44"
            key={currentIndex}
            initial="hidden"
            animate="visible"
            variants={descriptionVariants}
          >
            <TypewriterEffect text={projectsInfo[currentIndex].description} />
            <Link to={projectsInfo[currentIndex].link} className="flex gap-2 items-center mt-6">
              <p className="text-[20px] leading-[20px] lg:text-[48px] lg:leading-[52px] font-extralight border-b-[4px] border-[#1E50FF]">
                more
              </p>
              <img src="/ARROW.svg" className="w-10 h-10 lg:w-[60px]" />
            </Link>
          </motion.div>
          <div
            className="bg-blue rounded-bl-[96px] w-full py-10 pl-16 flex items-center"
          >
            <motion.img 
              key={projectsInfo[currentIndex].image}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              id="projectImage"
              src={projectsInfo[currentIndex].image} 
              alt="Project Image" 
              className="w-[700px] h-[350px]"
            />
          </div>
        </div>
      </div>
      <div
        id="arrowRight"
        className={`flex absolute top-0 right-10 h-full w-[100px] justify-center items-center cursor-pointer`}
        onClick={nextProject}
      >
        <img src="/angleRight.svg" alt="" />
      </div>
    </div>
  );
}

export default ProjectsSlider;
