import React from "react"
import Project from "./Project"
import { projects } from "../../data/Data"
import Con from "./Projects.style"

export default function Projects() {
  return (
    <Con>
      <Con.Title>Projects</Con.Title>
      <Con.Projects>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Con.Projects>
    </Con>
  )
}
