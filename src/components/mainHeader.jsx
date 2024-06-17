import React, { useState } from 'react';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 text-gray-200 bg-gray-800">
      <div className="flex  sm:justify-end  lg:justify-center px-4 py-4 pt-7 pb-4">
        <div className="block lg:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <button className=" text-blue-400 hover:text-blue-300" onClick={() => document.getElementById('section1').scrollIntoView({ behavior: 'smooth' })}>
            Home
          </button>
          <button className=" text-blue-400 hover:text-blue-300" onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button className=" text-blue-400 hover:text-blue-300" onClick={() => document.getElementById('section3').scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </button>
          <button className=" text-blue-400 hover:text-blue-300" onClick={() => document.getElementById('section5').scrollIntoView({ behavior: 'smooth' })}>
            Certifications
          </button>
          <button className=" text-blue-400 hover:text-blue-300" onClick={() => document.getElementById('section6').scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-2 pb-4">
          <button className="hover:text-white" onClick={() => {document.getElementById('section1').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false);}}>
            Home
          </button>
          <button className="hover:text-white" onClick={() => {document.getElementById('section2').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false);}}>
            About
          </button>
          <button className="hover:text-white" onClick={() => {document.getElementById('section3').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false);}}>
            Projects
          </button>
          <button className="hover:text-white" onClick={() => {document.getElementById('section5').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false);}}>
            Certifications
          </button>
          <button className="hover:text-white" onClick={() => {document.getElementById('section6').scrollIntoView({ behavior: 'smooth' }); setIsOpen(false);}}>
            Contact
          </button>
        </div>
      )}
    </div>
  );
}
