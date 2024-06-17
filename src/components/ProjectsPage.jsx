import React from "react";
import "../index"; // Ensure Tailwind CSS is imported

const projects = [
  {
    id: 1,
    title: "Key Binder",
    description:
      "A VSCode extension with Integrated predefined shortcuts and a user-friendly interface for managing custom shortcuts.",
    image: "keybinder.png",
    technologies: ["JavaScript", "HTML", "CSS", "VSCode API"],
    link: "https://marketplace.visualstudio.com/items?itemName=LJai.mycustomkeybinding",
  },
  {
    id: 2,
    title: "Hungry Hub",
    description:
      "A Food ordering App with diverse cuisines,easy checkout and efficient dish filtering.",
    image: "hungryhub.jpg",
    technologies: ["Tailwind CSS", "React", "Node.js", "Firebase"],
    link: "https://your-public-url.com/food-ordering-app",
  },
  {
    id: 3,
    title: "Netflix AI",
    description:
      "A Netflix clone with AI-powered movie suggestions based on user prompts like mood or genre.",
    image: "N1.jpg",
    technologies: ["React", "tailwind", "firebase", "OpenAI"],
    link: "https://neflix-ffd8d.web.app/",
  },
  {
    id: 4,
    title: "NexSearch",
    description:
      "A search engine developed using Google API, with live weather,location and  efficient pagination.",
    image: "nexsearch.png",
    technologies: ["Next JS", "Tailwind CSS", "Google API"],
    link: "https://nex-search.vercel.app/",
  },
  {
    id: 5,
    title: "Mobile Dashboard:",
    description:
      "A mobile interface with multiple app like Contacts, Calculator and Clock",
    image: "mobile.png",
    technologies: ["React", "Firebase", "Tailwind"],
    link: "https://contactapp-306f4.web.app/",
  },
  // Add other projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="mt-16  min-h-screen overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Projects
      </h1>

      <div className="scrollbar-hide flex flex-row overflow-x-scroll gap-4 w-full sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:w-80 w-60  flex-shrink-0 bg-white rounded-lg shadow-lg p-2 mb-3 transition-transform transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2 w-full">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-800"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
