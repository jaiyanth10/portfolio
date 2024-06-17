import React from "react";

const certifications = [
  {
    name: "Python Data Structures",
    platform: "Coursera",
    filePath: "certificate for python DS.pdf",
    image: "coursera.png",
  },
  {
    name: "Machine Learning with Python",
    platform: "CognitiveClassAI",
    filePath: "Cognitive Class Certificate.pdf",
    image: "cognitive.png",
  },
  {
    name: "Database with Python",
    platform: "Coursera",
    filePath: "coursera database  certificate.pdf",
    image: "coursera.png",
  },
  {
    name: "Web Development",
    platform: "Moreton Bay",
    filePath: "Moreton Bay Regional Council_web development _certificate.pdf",
    image: "mortan.png",
  },
  {
    name: "Associate Analytics",
    platform: "NASSCOM",
    filePath: "NAASCOM Lakumarapu Jaiyanth.pdf",
    image: "naascom.png",
  },
  {
    name: "Web Access for Python",
    platform: "Coursera",
    filePath: "python certificate for web access.pdf",
    image: "coursera.png",
  },
  {
    name: "Python for Everybody",
    platform: "Coursera",
    filePath: "python for everybody certificate.pdf",
    image: "coursera.png",
  },
  {
    name: "Big Data Foundation",
    platform: "Digital Vidya",
    filePath: "bigdata certificate digital vidya.png",
    image: "vidya.png",
  },
];

export default function CertificationsPage() {
  return (
    <section id="certifications" className="mt-16 h-60vh sm:min-h-[60] overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Certifications
      </h1>

      <div className="scrollbar-hide flex flex-row overflow-x-scroll gap-4 w-full sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white  px-8 py-2 sm:px-4 sm:py-4 rounded-lg shadow-lg flex items-center transition-transform transform hover:-translate-y-2"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="hidden sm:inline-block sm:w-16 sm:h-16 sm:object-contain sm:mr-4 sm:rounded-lg"
            />
            <div className="flex-grow">
              <h3 className=" text-sm sm:text-lg font-semibold text-gray-800">
                {cert.name}
              </h3>
              <p className="text-gray-600">{cert.platform}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
