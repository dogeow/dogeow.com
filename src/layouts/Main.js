import React, { useEffect, useMemo, useState } from "react";
import projects from "../resources/projects.json";

const DOING_WITH_DOT_MAX_LENGTH = 4; // doing 带小数点后的最大长度（doing 为一个单位），比如 「正在学习 Golang...」，那么长度为 4，其中小数点最长为 3 位。

// 正在做什么事情的文本
const getDoingText = (doings, timestamp) => {
  // 填充后的最大索引
  const doingWithDotMaxIndex = doings.length * DOING_WITH_DOT_MAX_LENGTH - 1;
  // 当前到第几个 doing 和第几个小数点
  const doingAndDotIndex = timestamp % (doingWithDotMaxIndex + 1);
  // 当前到第几个 doing
  const doingIndex = Math.floor(doingAndDotIndex / DOING_WITH_DOT_MAX_LENGTH);
  // 第几个小数点
  const dotCount = doingAndDotIndex % DOING_WITH_DOT_MAX_LENGTH;

  return `正在${doings[doingIndex]}.${".".repeat(dotCount)}`;
};

export default function Main({ doings }) {
  const [doing, setDoing] = useState("");

  const projectElements = useMemo(
    () =>
      projects.map((project) => (
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
      )),
    []
  );

  useEffect(() => {
    if (!doings || doings.length === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      const timestamp = Math.floor(Date.now() / 1000);
      setDoing(getDoingText(doings, timestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [doings]);

  return (
    <main className="mx-auto space-y-8">
      <div className="flex justify-center text-4xl">
        <span role="img">👏</span>欢迎<span role="img">👏</span>
      </div>
      <nav className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {projectElements}
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
