"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120 }
        }
    };

    return (
        <section id="experience" className="text-white py-8 px-4">
            <h2 className="pt-14 text-center text-4xl font-bold mb-8 md:mb-12">Professional Experience</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={ {once : true} }
                variants={ containerVariants }
                className="flex flex-col gap-8"
            >
                <motion.div variants={ itemVariants } className="bg-navBarColor p-6 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-semibold">Software Engineer, Integrated Systems</h3>
                    <p className="text-primary-600 text-lg mb-3">Picarro Inc.</p>
                    <ul className="list-none pl-5 text-gray-300 max-w-5xl">
                        <li className="mb-2">Backend support for system integration.
                        </li>
                    </ul>
                    <span className="block mt-2 text-primary-700">July 2024 - Present</span>
                </motion.div>
                <motion.div variants={ itemVariants } className="bg-navBarColor p-6 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-semibold">Teaching Assistant</h3>
                    <p className="text-primary-600 text-lg mb-3">Northeastern University</p>
                    <ul className="list-none pl-5 text-gray-300 max-w-5xl">
                        <li className="mb-2">Collaborated with faculty to integrate interactive programming concepts
                            into graduate-level courses, boosting computational thinking and engagement among students.
                        </li>
                        <li className="mb-2">Lead the development and implementation of programming tutorials and
                            workshops, reinforcing practical coding skills.
                        </li>
                        <li className="mb-2">Co-developed programming assignments and constructed auto-grading systems
                            to evaluate student code submissions efficiently.
                        </li>
                    </ul>
                    <span className="block mt-2 text-primary-700">August 2023 - May 2024</span>
                </motion.div>
                <motion.div variants={ itemVariants } className="bg-navBarColor p-6 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-semibold">Research & Development Engineer</h3>
                    <p className="text-primary-600 text-lg  mb-3">Enovix Corporation</p>
                    <ul className="list-none pl-5 text-gray-300 max-w-5xl">
                        <li className="mb-2">Developed and maintained Python automation scripts, leveraging NumPy
                            and Pandas, to streamline research proposal evaluations and prioritize daily tasks,
                            enhancing operational workflow for the R&D team.
                        </li>
                        <li className="mb-2">Designed and deployed macros alongside validating and optimizing lab
                            equipment software, automating the processing and visualization of 3D X-ray tomography
                            data, significantly boosting R&D productivity.
                        </li>
                        <li className="mb-2">Conducted advanced failure and data analytics for Li-ion battery research,
                            supporting Vehicle Technology Office projects with insightful data-driven feedback for
                            product design and manufacturing process refinement.
                        </li>
                    </ul>
                    <span className="block mt-2 text-primary-700">January 2022 - January 2023</span>
                </motion.div>
            </motion.div>
        </section>);
};

export default ExperienceSection;
