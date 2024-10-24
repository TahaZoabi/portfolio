import Title from '../components/Title.tsx'
import { projects } from '../lib/projects.ts'
import Card from '../components/ui/Card.tsx'

function Projects() {
  return (
    <section>
      <div
        id={'projects'}
        className="flex items-center justify-center gap-4"
      >
        <Title>Projects</Title>
      </div>
      <div className="mx-auto mb-16 flex max-w-sm flex-col items-center justify-center gap-5 px-4 sm:flex-wrap md:max-w-none md:gap-4 lg:flex-row">
        {projects.map((project) => (
          <div
            className="flex-1 md:w-1/2"
            key={project.id}
          >
            <Card project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
