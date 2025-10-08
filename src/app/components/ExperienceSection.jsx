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
                <motion.div variants={ itemVariants } className="glass p-6 rounded-lg shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold gradient-text">Software Engineer, Integrated Systems</h3>
                    <p className="text-primary-400 text-lg mb-3 font-medium">Picarro Inc.</p>
                    <ul className="list-none pl-5 text-gray-300 max-w-5xl">
                        <li className="mb-2">Implemented integrated system solutions to embed Picarro’s patented
                            CRDS analyzers into 10+ industrial ecosystem product line, enabling automated environmental
                            monitoring and control across semiconductor fabs, refineries, workplace safety, and other
                            critical applications.
                        </li>
                        <li className="mb-2">
                            Lead the product development of Mobile (Vehicular) VOC Detection from concept to early
                            demo leveraging FastAPI as Microservices, Docker, React, PostgreSQL,
                            coordinated 5+ cross-functional teams for system design, product development while
                            actively maturing it into a shippable product.
                        </li>
                        <li className="mb-2">
                            Contributed to Picarro’s existing core/edge microservice architecture:
                            <ul className="list-none pl-5 text-gray-300 max-w-5xl">
                                <li className="mb-2">
                                    Core: Core contributor to system orchestration, device integration, and service
                                    configuration (CRUD) using Docker; redesigned core algorithms to reduce latency
                                    and increase throughput, resulting in a 40% improvement in runtime performance;
                                    maintained CI/CD pipelines with Jenkins for software deployment.
                                </li>
                                <li className="mb-2">
                                    Edge: Handled data collection, monitoring, and real-time communication via gRPC,
                                    WebSocket, ZeroMQ, and Kafka.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <span className="block mt-4 text-primary-400 font-medium text-sm uppercase tracking-wider">July 2024 - Present</span>
                </motion.div>
                <motion.div variants={ itemVariants } className="glass p-6 rounded-lg shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold gradient-text">Teaching Assistant</h3>
                    <p className="text-primary-400 text-lg mb-3 font-medium">Northeastern University</p>
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
                    <span className="block mt-4 text-primary-400 font-medium text-sm uppercase tracking-wider">August 2023 - May 2024</span>
                </motion.div>
                <motion.div variants={ itemVariants } className="glass p-6 rounded-lg shadow-strong hover:shadow-strong transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-semibold gradient-text">Research & Development Engineer</h3>
                    <p className="text-primary-400 text-lg mb-3 font-medium">Enovix Corporation</p>
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
                    <span className="block mt-4 text-primary-400 font-medium text-sm uppercase tracking-wider">January 2022 - January 2023</span>
                </motion.div>
            </motion.div>
        </section>);
};

export default ExperienceSection;
