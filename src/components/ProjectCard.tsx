
import { CodeBracketIcon } from "@heroicons/react/16/solid"

interface Props {
  title: string,
  description: string,
  gitUrl: string,
  image: string
}

const ProjectCard = ({ title, description, gitUrl, image }: Props) => {
  return (
    <div className="relative rounded-xl group p-6 h-full overflow-hidden transition-all duration-500 hover:translate-y-[-0.25rem]" >
      {/* Background image container */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt="Project background"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out scale-125 group-hover:scale-100"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 transition-all duration-300 group-hover:bg-black/70" />

      {/* Code icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <a 
          href={gitUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white transition-colors duration-300" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col group-hover:hidden">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE] flex-grow">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard