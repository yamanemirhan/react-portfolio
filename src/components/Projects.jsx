import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

function Projects() {
  return (
    <div id="projects" className="sm:p-6 p-2">
      <h2 className="text-3xl mb-4">Projects</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
