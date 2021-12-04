import React from "react";
import projects from "./projects.json";

export default () => (
  <div className="flex min-w-full min-h-screen items-center text-sm text-gray-200 bg-random bg-cover bg-center transition-opacity duration-700">
    <header>
      <h1 className="absolute right top-4 left-4">Doge 先锋</h1>
    </header>
    <main className="max-w-sm mx-auto space-y-10">
      <div className="text-4xl text-center">
        <span role="img">👏</span>欢迎<span role="img">👏</span>
      </div>
      <nav className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {projects.map((project, index) => (
          <a
            className="block hover:bg-gray-50 hover:bg-opacity-20 cursor-pointer"
            href={project.link}
            key={index}
          >
            <div className="flex flex-col items-center flex-nowrap">
              <img width="40" src={project.image} alt={project.title} />
              <div>{project.title}</div>
            </div>
          </a>
        ))}
      </nav>
    </main>
    <footer className="absolute left bottom-4 right-4">小李世界</footer>
  </div>
);
