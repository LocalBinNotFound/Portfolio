"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={ {opacity : 0, scale : 0.5} }
                            animate={ {opacity : 1, scale : 1} }
                            transition={ {duration : 0.5} }
                            className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hello, I'm{ " " }
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={ [
                                'Junjie', 1000, 'Software Engineer', 1000, 'Backend Engineer', 1000, 'Tech Enthusiast', 1000,
                            ] }
                            wrapper="span"
                            cursor={ true }
                            speed={ 50 }
                            repeat={ Infinity }
                        />
                    </h1>
                    <p className="text-textColor text-base sm:text-lg mb-3 lg:text-xl">
                        System Integration Software Engineer at Picarro Inc.<br/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Ready to transform ideas into reality? Let's make something amazing!<br/>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToContact}
                            className="btn-modern bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:shadow-strong text-white">
                            Hire Me
                        </button>
                        <button className="btn-modern glass hover:shadow-strong text-white group">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1ev3jjCiIxjThInFqfjZmuY6_oLkBWvf0"
                                download="Junjie_Fang_Resume.pdf"
                                className="block">
                                Download Resumé
                            </a>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={ {opacity : 0, scale : 0.5} }
                            animate={ {opacity : 1, scale : 1} }
                            transition={ {duration : 0.5} } className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="relative group">
                        <div className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative glass shadow-strong">
                            <Image
                                src="/images/hero-image.png"
                                alt="hero image"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-500 group-hover:scale-110"
                                width={ 300 }
                                height={ 300 }
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>)
}

export default HeroSection;