import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid"

interface Props{
  title: string,
  description: string,
  gitUrl: string,
}

const ProjectCard = ({ title, description, gitUrl }: Props) => {
  gitUrl = gitUrl || "/"

  return (
    <div className="relative rounded-xl bg-[#181818] group p-6 h-full transition-all duration-300 hover:translate-y-[-0.25rem]">
      {/* Hover Overlay with Icons */}
      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <a 
          href={gitUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white transition-colors duration-300" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE] flex-grow">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard