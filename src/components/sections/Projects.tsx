import { projects } from '../../data/projects'
import { Section } from '../ui/Section'
import { ProjectCard } from './projects/ProjectCard'

export function Projects() {
  const [featuredProject, ...secondaryProjects] = projects

  return (
    <Section id="proyectos" eyebrow="Evidencia" title="Proyectos destacados con evidencia real">
      <div className="space-y-5">
        {featuredProject ? <ProjectCard index={0} key={featuredProject.name} project={featuredProject} /> : null}
        <div className="grid gap-5 lg:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <ProjectCard index={index + 1} key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
