"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Road Trip Planner",
        description: "An AI-powered road trip planner for road-tripping with your beloved furry friends",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/LocalBinNotFound/Road-Trip-Planner",
        previewUrl: "https://road-trip-planner-one.vercel.app/"
    },
    {
        id: 2,
        title: "Keynatic Mall",
        description: "An e-commerce application with decoupled architecture designed for custom keyboard lovers",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/LocalBinNotFound/keynatic-mall",
        previewUrl: "https://github.com/LocalBinNotFound/keynatic-mall"
    },
    {
        id: 3,
        title: "NotJustBubbleSort",
        description: "An Android mobile game made with Unity for beginners to learn algorithms and data structures",
        image: "/images/projects/3.png",
        tag: ["All", "Mobile", "Web"],
        gitUrl: "https://github.com/LocalBinNotFound/not-just-bubble-sort",
        previewUrl: "https://appetize.io/app/nssahhg45e7stiaxkkt4sgaqci?device=pixel7&osVersion=13.0",
        previewUrlWeb: "https://junjiefang1996.itch.io/notjustbubblesort"
    },
    {
        id: 4,
        title: "Artwork Search",
        description: "A mini utility to search for artwork from Art Institute of Chicago",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/CS5520FeinbergSpring2024/group-a6-a6-group9",
        previewUrl: "https://appetize.io/app/fe76ecng2fx43lbwnbcdimq7uy?device=pixel7&osVersion=13.0"
    },
    {
        id: 5,
        title: "Image Wicked",
        description: "An image utility with GUI to perform pixel manipulations, written in C",
        image: "/images/projects/5.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/LocalBinNotFound/Image-Processing-Program",
        previewUrl: "https://github.com/LocalBinNotFound/Image-Processing-Program/blob/main/README.md"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id={"projects"}>
            <h2 className="pt-24 text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Desktop"
                    isSelected={tag === "Desktop"}
                />
            </div>
            <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={ cardVariants }
                        initial="initial"
                        animate={ isInView ? "animate" : "initial" }
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard
                            key={ project.id }
                            title={ project.title }
                            description={ project.description }
                            imgUrl={ project.image }
                            gitUrl={ project.gitUrl }
                            previewUrl={ project.previewUrl }
                            previewUrlWeb={project.previewUrlWeb}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>

    )
}

export default ProjectSection;