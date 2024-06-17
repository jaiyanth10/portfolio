// App.js
import React from "react";
import MainHeader from "./components/mainHeader";
import HomePage from "./components/homePage";
import About from "./components/AboutPage";
import Projects from "./components/ProjectsPage";
import Certifications from "./components/CertificationsPage";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
      <MainHeader />
      <div>
        <section id="section1" className="h-screen  mx-auto ">
          <HomePage />
        </section>
        <section id="section2" className="h-screen mx-auto">
          <About />
        </section>
        <section id="section3" className="h-screen mx-auto">
          <Projects />
        </section>
        <section id="section5" className="h-screen mx-auto">
          <Certifications />
        </section>
        <section id="section6" className="h-screen mx-auto">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
