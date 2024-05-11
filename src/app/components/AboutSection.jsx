"use client";
import React, { useState, useTransition } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: "Languages",
        id: "languages",
        content: (<ul className="list-disc pl-2">
            <li>JavaScript</li>
            <li>MATLAB</li>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>SQL</li>
            <li>R</li>
        </ul>)
    },
    {
        title: "Tools",
        id: "tools",
        content: (<ul className="list-disc pl-2">
            <li>Unity Game Engine</li>
            <li>Android Studio</li>
            <li>Atlassian Jira</li>
            <li>NoSQL Database</li>
            <li>GDB Debugger</li>
            <li>Postman</li>
            <li>PyTorch</li>
            <li>JUnit</li>
            <li>SQLite</li>
            <li>MySQL</li>
            <li>Unix</li>
            <li>Git</li>
        </ul>)
    }, {
        title : "skills", id : "skills", content: (<ul className="list-disc pl-2">
            <li>RESTful API</li>
            <li>Spring Boot</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>MyBatis</li>
            <li>Docker</li>
            <li>AWS S3</li>
            <li>Azure</li>

        </ul>)
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
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
                        A dedicated and driven software developer specializing in full stack and mobile development.
                        My academic journey began with B.S. in Engineering at UC Berkeley, providing me with a robust
                        foundation in analytical thinking and problem-solving skills. With a unique blend of engineering
                        expertise and programming proficiency, I am eager to contribute to projects that are not only
                        challenging but also push the boundaries of technology.
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
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active = {tab === "skills"}
                        >
                            Skills
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>)
}

export default AboutSection;