import { Github } from 'lucide-react'
import React from 'react'
import { Project } from '../../lib/projects.ts'

interface ProjectProps {
  project: Project
}

const Card: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="group relative flex h-full min-h-80 w-full flex-col overflow-hidden rounded-xl border-2 bg-input shadow-md">
      {project.link && (
        <a
          href={project.link}
          target={'_blank'}
          className="absolute right-2 top-2 z-10 rounded-full bg-input p-2 transition hover:bg-border md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      <div className="relative h-full w-full overflow-hidden">
        {/* <div className="absolute bottom-0 left-0 z-10 w-full h-16 from-input bg-gradient-to-t"></div> */}
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={project.img}
          alt={project.title}
        />
      </div>
      <div className="z-10 flex h-fit flex-col justify-between p-4">
        <div className="mb-2 line-clamp-1 text-xl font-bold">
          {project.title}
        </div>
        <p className="line-clamp-5 text-lg">{project.description}</p>
      </div>
    </div>
  )
}

export default Card
