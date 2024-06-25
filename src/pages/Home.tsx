import About from "../components/About";
import ServiceSection from "../components/ServiceSection";
import LogoSlider from "../components/LogoSlider";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      
      <Hero/>

      <About/>

      <LogoSlider/>

      <ServiceSection/>

      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      
    </>
  )
}

export default Home;