"use client";
import React, { useState, useTransition } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Northeastern University</li>
                <li>University of California, Berkeley</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Teaching Assistant</li>
                <li>R&D Engineer</li>
            </ul>
        )
    }
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
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/profile.jpg" alt="profile image" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a dedicated Computer Science student at Northeastern University,
                        pursuing a comprehensive understanding of the computer technologies.
                        My academic journey began with a B.S. in Chemical Engineering & Materials
                        Science and Engineering from UC Berkeley, a foundation that has greatly
                        enriched my problem-solving skills. My transition to Computer Science was
                        guided by several years of immersion in an industrial environment, where
                        I actively engaged with programming tasks and gradually developed a deep
                        passion for the field. This journey led me to a systematic study of Computer
                        Science, where I'm committed to mastering the intricacies of software and
                        full-stack development , and cutting-edge technologies.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active = {tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active = {tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active = {tab === "experience"}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>)
}

export default AboutSection;