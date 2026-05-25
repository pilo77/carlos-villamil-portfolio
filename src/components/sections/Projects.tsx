import { projects } from '../../data/projects'
import { Section } from '../ui/Section'
import { ProjectCard } from './projects/ProjectCard'

export function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Evidencia"
      title="Proyectos con rol, alcance, enlaces y estado real"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
