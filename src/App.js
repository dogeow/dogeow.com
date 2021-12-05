import React from "react";
import TailwindCSS from "./TailwindCSS";
import projects from "./projects.json";
import ExternalLink from "./components/ExternalLink";
import Record from "./Record";

export default () => (
  <div className="flex flex-col justify-between min-w-screen min-h-screen text-sm text-gray-200 bg-random bg-cover bg-center transition-opacity duration-700">
    <header className="flex justify-between">
      <div className="p-2">{process.env.REACT_APP_NAME}</div>
      <div className="p-2">小李世界</div>
    </header>
    <main className="max-w-md mx-auto">
      <div className="text-4xl text-center">
        <span role="img">👏</span>欢迎<span role="img">👏</span>
      </div>
      <nav className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {projects.map((project, index) => (
          <a
            className="block p-4 hover:bg-gray-50 hover:bg-opacity-20 cursor-pointer"
            href={project.link}
            key={index}
          >
            <div className="flex flex-col items-center space-y-4 flex-nowrap">
              <img width="40" src={project.image} alt={project.title} />
              <div>{project.title}</div>
            </div>
          </a>
        ))}
      </nav>
    </main>
    <footer className="flex xs:flex-col md:flex justify-center space-x-5 text-gray-400">
      <ExternalLink href={"http://www.beian.gov.cn/"}>
        <div className="flex items-center">
          <img src={Record} alt="" style={{ verticalAlign: "top" }} />
          <span>闽公网安备35020302033650号</span>
        </div>
      </ExternalLink>
      <ExternalLink href={"https://beian.miit.gov.cn/"}>
        闽ICP备19021694号
      </ExternalLink>
      <div className="flex items-center space-x-1">
        <span>Powered by</span>
        <TailwindCSS />
      </div>
    </footer>
  </div>
);
