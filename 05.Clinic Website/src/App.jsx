import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Specialists/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default App;