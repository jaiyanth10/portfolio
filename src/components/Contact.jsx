import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <section id="section6" className="py-20">
            <div className="container mx-auto px-6 md:px-10 transition-transform transform hover:-translate-y-2">
                <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center mx-auto md:w-2/3 lg:w-1/2">
                    <h3 className="text-2xl font-semibold text-white mb-6">JAIYANTH LAKUMARAPU</h3>
                    <div className="contact-details mb-8">
                        <div className="flex items-center justify-center mb-6">
                            <FaMapMarkerAlt size={20} className="text-blue-400 mr-2" aria-label="Location Icon" />
                            <p className="text-white text-lg md:text-xl">Fairfax, VA, 22030</p>
                        </div>
                        <div className="flex items-center justify-center mb-4">
                            <a href="mailto:jaiyanthlakumarapu10@gmail.com" className="email-link text-blue-400 text-base md:text-lg px-4 py-2 border border-blue-400 rounded hover:bg-gray-900 flex items-center" role="button" aria-label="Contact Me via Email">
                                <FaEnvelope size={16} className="mr-2" aria-label="Email Icon" /> Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="social-icons flex justify-center gap-8 mb-8 animate-bounce">
                        <a href="https://www.linkedin.com/in/jaiyanth-lakumarapu" target="_blank" rel="noopener noreferrer" className="linkedin transform hover:scale-110 transition-transform duration-300" aria-label="LinkedIn Profile">
                            <FaLinkedin size={30} className="text-blue-500 hover:text-blue-700" />
                        </a>
                        <a href="https://www.instagram.com/jaiyanth_10/?igsh=MWR3OTRnN2dmemQ3bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="instagram transform hover:scale-110 transition-transform duration-300" aria-label="Instagram Profile">
                            <FaInstagram size={30} className="text-pink-500 hover:text-pink-700" />
                        </a>
                        <a href="https://github.com/jaiyanth10" target="_blank" rel="noopener noreferrer" className="github transform hover:scale-110 transition-transform duration-300" aria-label="GitHub Profile">
                            <FaGithub size={30} className="text-gray-300 hover:text-gray-500" />
                        </a>
                    </div>
                    <p className="text-gray-400 mt-8  text-sm">
                        Feel free to reach out to me through email or my social media accounts!
                    </p>
                </div>
            </div>
        </section>
    );
}
