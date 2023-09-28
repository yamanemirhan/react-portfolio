import React from "react";
import { getImageUrl } from "../utils";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-2 p-2 w-[600px] bg-slate-200 dark:bg-slate-700 rounded-md border">
      <img
        src={getImageUrl(`${project.imageSrc}`)}
        alt="project"
        className="sm:h-[288px] h-[180px]"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.skills.map((skill, i) => (
          <span key={i} className="border rounded-xl p-1 bg-orange-400">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <a href={project.demo} target="_blank">
          <button className="text-xl border border-slate-400 py-1 px-4 rounded-md bg-slate-300 dark:bg-slate-900">
            Demo
          </button>
        </a>
        <a href={project.source} target="_blank">
          <button className="text-xl border border-slate-400 py-1 px-4 rounded-md bg-slate-300 dark:bg-slate-900">
            Source
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
