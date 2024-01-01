import React from "react";
import "./Pages.css";
import Header from "../components/homepage/Header";
import About from "../components/homepage/About";
import Skills from "../components/homepage/Skills";
import Portfolio from "../components/homepage/Portfolio";
import Services from "../components/homepage/Services";
import Shout from "../components/homepage/Shout";
import Stats from "../components/homepage/Stats";
import Form from "../components/homepage/Form";
import Contact from "../components/homepage/Contact";
import Footer from "../components/homepage/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      {/* <Skills /> */}
      <Portfolio />
      <Services />
     <Shout />
      {/* <Skills />
       <Stats /> */}
      {/* <Form /> */}
      {/*<Contact />
      <Footer /> 
      */}
    </div>
  );
};

export default HomePage;
