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
      <div className="mx-auto mb-16 grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            className="flex justify-center"
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
