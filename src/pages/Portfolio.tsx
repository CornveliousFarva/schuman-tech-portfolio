import type { ComponentType } from "react"
import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"

const ProjectCardTyped = ProjectCard as ComponentType<{
  project: typeof projects[number]
}>

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Portfolio Projects
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCardTyped
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}