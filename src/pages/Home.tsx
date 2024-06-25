import About from "../components/About";
import ServiceSection from "../components/ServiceSection";
import LogoSlider from "../components/LogoSlider";
import Hero from "../components/Hero";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <>
      
      <Hero/>

      <About/>

      <LogoSlider/>

      <section className="min-h-screen"></section>

      <ServiceSection/>

      <TestimonialSection/>
      
    </>
  )
}

export default Home;