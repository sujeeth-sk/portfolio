// import React from 'react'
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface IProjectsData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: IProjectsData[] = [
  {
    id: 1,
    title: "project name 1",
    description: "description one",
    image: "a/b/c/d",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "project name 2",
    description: "description two",
    image: "a/b/c/d",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
];

const ProjectsSection = () => {

    const [tag, setTag] = useState<string>("All")

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
       <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
       <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"}/>
       <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === "Full Stack"}/>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mdLgap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
