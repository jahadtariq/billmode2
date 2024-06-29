import ProjectsSlider from "./ProjectsSlider";
import ProjectsSliderReverse from "./ProjectsSliderReverse";

const ProjectsSection = () => {

  return (
    <section className="h-contain flex flex-col gap-32 py-20">

        <ProjectsSlider/>

      <h1 className="text-[144px] leading-[72px] font-bold capitalize text-center">
        Recent Projects
      </h1>

        <ProjectsSliderReverse/>
      

    </section>
  );
};

export default ProjectsSection;
