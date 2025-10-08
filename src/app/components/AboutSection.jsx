"use client";
import React, { useState, useTransition } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "MicroPython", "Java", "C/C++", "C#", "Go"].map((skill, index) => (
                    <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-soft hover:scale-105 transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <div className="flex flex-wrap gap-2">
                {["Unity Game Engine", "Android Studio", "Docker", "Postman", "PyTorch", "Jenkins", "MySQL", "Linux/Unix", 
                "Git", "RESTful API", "Protobuf/gRPC", "Spring Boot", "React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", 
                "Redis", "AWS S3", "FastAPI", "Microservices", "Kubernetes", "CI/CD"].map((skill, index) => (
                    <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-soft hover:scale-105 transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("languages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 md:items-start items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="md:sticky md:top-0 pt-12"><Image src="/images/profile.jpg" alt="profile image" width={500} height={500} /></div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="pt-12 text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        A passionate Software Engineer specializing in system level programming and full-stack development, 
                        currently driving innovation at Picarro Inc. where I lead the development of mobile VOC detection 
                        systems and contribute to core microservice architectures. With a M.S. in Computer Science from 
                        Northeastern University I bring a unique combination of analytical thinking, technical expertise,
                         and collaborative leadership to every project. I am passionate about building scalable solutions 
                         that solve real-world problems.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active = {tab === "languages"}
                        >
                            Languages
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("tools")}
                            active = {tab === "tools"}
                        >
                            Tools
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>)
}

export default AboutSection;