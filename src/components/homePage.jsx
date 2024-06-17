import React from "react";
import styles from "../style/homePage.module.css"; // Import the CSS module

export default function About() {
  return (
    <section id="about" className="text-white min-h-screen relative pt-28 ">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        {/* Decorative Circles */}
        <div className="absolute w-72 h-72 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        {/* <div className="absolute top-20 left-20 w-56 h-56 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-40 w-64 h-64 sm:w-80 sm:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

        {/* Image */}
        <div className="w-3/5 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
          <img
            className={`object-cover object-center rounded-2xl shadow-lg transition-transform transform ${styles.bounceCustom}`}
            alt="Coding"
            src="Profile Pic.png"
          />
        </div>

        {/* Text Content */}
        <div className="lg:flex-grow md:w-3/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 pt-2">
            Hi, I'm Jaiyanth Lakumarapu.
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-justify">
            A highly motivated Computer Science Master's graduate with a
            passion for software development and technology solutions. My
            expertise includes languages such as Java, Python, and JavaScript,
            as well as experience with frameworks like React JS, Next JS and Node js.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-justify">
            I thrive on solving complex challenges and am committed to
            continuous learning and professional growth. I'm excited to join a
            dynamic team where I can contribute my skills, ideas, and innovative
            solutions.
          </p>
          <div className="flex flex-row ">
          {/*Game Button*/}
          <div className= "text-blue-400 text-base md:text-md px-2 py-1 border border-blue-400 rounded hover:bg-gray-900 flex items-center mb-2 ml-3 cursor-pointer">
              <a
                href="https://jaiyanth10.github.io/2048/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play a Game!
              </a>
              </div> 
          {/* Contact Me Button */}
         
            <div className= "text-blue-400 text-base md:text-md px-2 py-1 border border-blue-400 rounded hover:bg-gray-900 flex items-center mb-2 ml-3 cursor-pointer">
              <a
                href="JAIYANTH LAKUMARAPU RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
}
