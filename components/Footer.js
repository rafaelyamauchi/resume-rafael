import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className="my-8 py-4 border-t-2 rounded-lg shadow-lg bg-white">
            <h1 className="text-2xl md:text-4xl uppercase font-bold text-center">Contato</h1>
            <div className="flex">
                <div className="flex-1 px-4 py-2 m-2 text-center">
                    <a href="https://www.linkedin.com/in/rafaelyamauchi" target="_blank" className="transition duration-500 ease-in-out hover:text-yellow-400 transform hover:-translate-y-1 hover:scale-110">
                        <FaLinkedin className="text-3xl md:text-6xl m-auto" />
                    </a>
                </div>
                <div className="flex-1 px-4 py-2 m-2 text-center">
                    <a href="mailto:rafa.yamau@hotmail.com" target="_blank" className="transition duration-500 ease-in-out hover:text-yellow-400 transform hover:-translate-y-1 hover:scale-110">
                        <MdEmail className="text-3xl md:text-6xl m-auto" />
                    </a>
                </div>
                <div className="flex-1 px-4 py-2 m-2 text-center">
                    <a href="https://github.com/users/rafaelyamauchi" target="_blank" className="transition duration-500 ease-in-out hover:text-yellow-400 transform hover:-translate-y-1 hover:scale-110">
                        <FaGithub className="text-3xl md:text-6xl m-auto" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;