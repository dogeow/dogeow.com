import React, { useEffect, useState } from "react";
import projects from "../resources/projects.json";

const DOING_AND_DOT_MAX_LENGTH = 4; // doing 加上小数点额最大长度（doing 为一个单位），比如 「正在学习 Golang...」，那么长度为 4，其中小数点最长为 3 位。

export default function Main(props) {
  const [doing, setDoing] = useState("");

  useEffect(() => {
    if (!props.doings || props.doings.length === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      const timestamp = Math.floor(Date.now() / 1000);

      const doingMaxIndex = props.doings.length - 1;
      const doingAndDotMaxIndex =
        (doingMaxIndex + 1) * DOING_AND_DOT_MAX_LENGTH - 1;
      const doingAndDotIndex = timestamp % (doingAndDotMaxIndex + 1);
      const doingIndex = Math.floor(
        doingAndDotIndex / DOING_AND_DOT_MAX_LENGTH
      );

      const dotCount = doingAndDotIndex % DOING_AND_DOT_MAX_LENGTH;
      const dotString = ".".repeat(dotCount);

      const doingText = `正在${props.doings[doingIndex]}${dotString}`;
      setDoing(doingText);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [props.doings]);

  return (
    <main className="mx-auto space-y-8">
      <div className="flex justify-center text-4xl">
        <span role="img">👏</span>欢迎<span role="img">👏</span>
      </div>
      <nav className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {projects.map((project) => (
          <a
            className="block p-4 hover:bg-white hover:bg-opacity-20 cursor-pointer"
            href={project.link}
            key={project.id}
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center space-y-4">
              <img width="40" src={project.image} alt={project.title} />
              <div>{project.title}</div>
            </div>
          </a>
        ))}
      </nav>
      <div className="flex justify-center text">
        <a
          href="https://lab.dogeow.com/project/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {doing}
        </a>
      </div>
    </main>
  );
}
