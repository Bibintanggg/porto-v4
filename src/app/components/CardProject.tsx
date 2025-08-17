import { Project } from "@/types/project";
import { FiShare, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  return (
    <div className="max-w-xl rounded-lg overflow-hidden shadow-lg bg-white/5 
    backdrop-blur-md border mx-auto flex flex-col justify-center items-center
    border-white/10 hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-[380px] ">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-md mt-4"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-sans">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex justify-between w-full items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans group flex items-center gap-2 bg-white/10 backdrop-blur-3xl 
             text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            <span className="transition-all duration-200 group-hover:-ml-1">
              Demo
            </span>
            <FiShare  
            className="transition-all duration-200 group-hover:rotate-90 group-hover:ml-3" />
          </a>


          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans group flex items-center gap-2 bg-white/10 backdrop-blur-3xl
            text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            <span className="group-hover:ml-1 transition-all duration-200">
              View Details
            </span>
            <FiArrowUpRight size={18}
            className="group-hover:rotate-[45deg] transition-all duration-200 group-hover:ml-2" />
          </a>
        </div>

      </div>
    </div>
  );
}