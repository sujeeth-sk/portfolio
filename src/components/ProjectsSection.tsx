// import React from 'react'
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface IProjectsData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  // previewUrl: string;
}

const projectsData: IProjectsData[] = [
  {
    id: 1,
    title: "Book Store Manager",
    description: "Built a comprehensive book store management application using the MERN stack, allowing users to manage inventory, view book details, and perform CRUD operations.",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/sujeeth-sk/book-store",
    image: "https://media.istockphoto.com/id/900301626/photo/brown-wooden-shelfs-fully-packed-with-books-in-a-library.jpg?s=1024x1024&w=is&k=20&c=BOqCBQKwFdfhXP1w75Rc0vQToKHLh07EGMXGgXQDj1Y=",
  },
  {
    id: 2,
    title: "Code to Survive Frontend for MFC",
    description: "Developed the frontend for Mozilla Firefox Club's (MFC) event during the Gravitas tech fest. Built using Next.js and TypeScript to ensure a performant and type-safe user experience.",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/MFC-VIT/CTS-Frontend",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm94fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Kanban Board with Smooth UI",
    description: "Created a Kanban board application with drag-and-drop functionality for task management. Enhanced user interface with animations and seamless interactions using dnd-kit.",
    tag: ["All", "Frontend"],
    gitUrl: "https://kanban-board-beige-xi.vercel.app/",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGthbmJhbiUyMGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Blog Application",
    description: "Developed a full-stack blog application allowing users to create, read, update, and delete blog posts. Implemented secure authentication and authorization using JWT (JSON Web Tokens). Enabled users to upload images and manage content efficiently.",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/sujeeth-sk/blog-application",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "More Projects",
    description: "Explore additional projects on my GitHub profile",
    tag: ["All", "Full Stack", "Frontend"],
    gitUrl: "https://github.com/sujeeth-sk",
    image: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJyb3d8ZW58MHx8MHx8fDA%3D",
  }
];

const ProjectsSection = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

    const [tag, setTag] = useState<string>("All")

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    }


  return (
    <section ref={ref}  id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4" id="projects">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
       <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
       <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"}/>
       <ProjectTag onClick={handleTagChange} name="Full Stack" isSelected={tag === "Full Stack"}/>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <motion.li variants={cardVariants} initial="initail" animate={isInView ? "animate" : "initial"} className="sm:h-[150px]">
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            gitUrl={project.gitUrl}
            // previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
