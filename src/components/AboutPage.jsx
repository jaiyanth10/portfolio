import React from "react";
import { FaFileCode } from "react-icons/fa";
import {
  DiJava,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiGit,
  DiNodejs,
  DiDatabase,

} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
export default function About() {
  return (
    <section id="about" className="text-gray-900">
      {/* Education Section */}
      <div className="container mx-auto px-6 sm:px-10 h-50px mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Education
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex flex-col items-center">
            <img
              src="/Gmu.png"
              alt="George Mason University Logo"
              className="w-12 h-12 mb-4 animate-bounce rounded-lg"
            />
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Master's in Computer and Information Sciences
              </h3>
              <p className="text-sm sm:text-base mb-2 ">
                <strong>George Mason University</strong>
                <br />
                Fairfax, Virginia, USA
              </p>
{/*               <p className="text-sm sm:text-base mb-4">
                <strong>Graduation:</strong> May 2024
              </p> */}
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <img
              src="/Vit.png"
              alt="Vellore Institute of Technology Logo"
              className="w-12 h-12 mb-4 animate-bounce rounded-lg"
            />
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Bachelor's of Technology in Computer Science
              </h3>
              <p className="text-sm sm:text-base mb-2">
                <strong>Vellore Institute of Technology</strong>
                <br />
                Amaravati, Andhra Pradesh, India
              </p>
{/*               <p className="text-sm sm:text-base mb-4">
                <strong>Graduation:</strong> May 2022
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 sm:px-10 mt-12">
        <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {[
            {
              skill: "JAVA",
              icon: <DiJava size={28} className="text-[#007396]" />,
            },
            {
              skill: "Python",
              icon: <DiPython size={28} className="text-[#3776AB]" />,
            },
            {
              skill: "JavaScript",
              icon: <DiJavascript1 size={28} className="text-[#F7DF1E]" />,
            },
            {
              skill: "HTML",
              icon: <DiHtml5 size={28} className="text-[#E34F26]" />,
            },
            {
              skill: "CSS",
              icon: <DiCss3 size={28} className="text-[#1572B6]" />,
            },
            {
              skill: "Node JS",
              icon: <DiNodejs size={28} className="text-[#339933]" />,
            },
            {
              skill: "TypeScript",
              icon: <FaFileCode size={28} className="text-[#3178C6]" />,
            },
            {
              skill: "React JS",
              icon: <DiReact size={28} className="text-[#61DAFB]" />,
            },
            {
              skill: "Next JS",
              icon: <SiNextdotjs size={28} className="text-[#0c0c0c]" />,
            },
            {
              skill: "Tailwind CSS",
              icon: <DiCss3 size={28} className="text-[#06B6D4]" />,
            },
            {
              skill: "Bootstrap",
              icon: <DiCss3 size={28} className="text-[#7952B3]" />,
            },
            {
              skill: "Redux",
              icon: <DiReact size={28} className="text-[#764ABC]" />,
            },
            {
              skill: "SQL",
              icon: <DiDatabase size={28} className="text-[#4479A1]" />,
            },
            {
              skill: "Git",
              icon: <DiGit size={28} className="text-[#F05032]" />,
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-3 sm:p-3 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-xs sm:text-sm font-semibold">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
