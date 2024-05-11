"use client";
import React, {useState} from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120 }
        }
    };

    return (
        <section id="education" className="text-white py-8 px-4">
            <h2 className="pt-24 text-center text-4xl font-bold mb-8 md:mb-12">Education</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            >
                <motion.div variants={itemVariants} className="flex-grow">
                    <h3 className="text-2xl font-semibold">Northeastern University</h3>
                    <p className="text-primary-400 text-lg">Master of Science - Computer Science</p>
                    <ul className="list-disc pl-5 max-w-4xl">
                        <li><strong>Cumulative GPA: 4.0</strong></li>
                        <li>
                            <strong>Coursework</strong>: Discrete Structures, OOP, Computer Systems and Hardware, Database
                            Management, Algorithms, Web Development, Mobile App Development, Software Foundations,
                            Machine Learning, Computer/Human Interactions, Networking
                        </li>
                        <div className="relative mt-2 p-2 border-l-4 border-primary-500 transition duration-300 ease-in-out transform hover:scale-105">
                            <p onMouseEnter={ () => setShowPopup(true) }
                               onMouseLeave={ () => setShowPopup(false) }>
                                Vice President at NU Algorithm Interactive Gaming (NU AIG)
                                <span className="text-primary-500 ml-2">[!]</span>
                            </p>
                            { showPopup && (<div
                                    className="absolute max-w-xl p-2 bg-white text-black rounded-lg shadow-lg -left-10 top-10">
                                    <p>Build interactive and engaging games for students to lean algorithms and
                                    data structures. Spearhead the strategic planning of the club and event hosting
                                    such as hackathon and workshops. Collaborate in building a treasure hunt theme
                                    framework for host various algorithm learning games with <strong>React</strong> and <strong>Three.js</strong>.</p>
                                </div>) }
                        </div>
                    </ul>
                </motion.div>
                <motion.div variants={ itemVariants } className="text-primary-500">
                    January 2023 - August 2024
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={ containerVariants }
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-8"
            >
                <motion.div variants={ itemVariants } className="flex-grow">
                    <h3 className="text-2xl font-semibold">University of California, Berkeley</h3>
                    <p className="text-primary-400 text-lg">Bachelor of Science - Chemical Engineering</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Cumulative GPA: 3.7</strong></li>
                    </ul>
                </motion.div>
                <motion.div variants={ itemVariants } className="text-primary-500">
                    August 2017 - December 2019
                </motion.div>
            </motion.div>
        </section>
    );
};

export default EducationSection;
