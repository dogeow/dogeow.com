import React from "react";
import projects from "../resources/projects.json";

export default () => (
  <main className="mx-auto space-y-8">
    <div className="flex justify-center text-4xl">
      <span role="img">👏</span>欢迎<span role="img">👏</span>
    </div>
    <nav className="grid gap-2 grid-cols-2 md:grid-cols-4">
      {projects.map((project, index) => (
        <a
          className="block p-4 hover:bg-white hover:bg-opacity-20 cursor-pointer"
          href={project.link}
          key={index}
        >
          <div className="flex flex-col items-center space-y-4">
            <img width="40" src={project.image} alt={project.title} />
            <div>{project.title}</div>
          </div>
        </a>
      ))}
    </nav>
  </main>
);
