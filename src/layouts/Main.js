import React, { useEffect } from "react";
import projects from "../resources/projects.json";

const doingAndDotMaxLength = 4; // doing 加上小数点额最大长度（doing 为一个单位），比如 「正在学习 Golang...」，那么长度为 4，其中小数点最长为 3 位。

export default (props) => {
  const [doing, setDoing] = React.useState("");

  useEffect(() => {
    if (props.doings && props.doings.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      // 时间戳，秒
      const timestamp = Math.floor(Date.now() / 1000);
      const doingRemainder =
        timestamp % (props.doings.length * doingAndDotMaxLength); // 增加的小数点也要上上去
      const doingDotRemainder = doingRemainder % doingAndDotMaxLength; // 第几个小数点
      const doing =
        props.doings[Math.floor(doingRemainder / doingAndDotMaxLength)]; // 第几个 doing
      // 小数点区间
      if (doingDotRemainder !== 0) {
        const doingAndDot = doing + Array(doingDotRemainder).fill(".").join("");
        setDoing(`正在${doingAndDot}`);
      } else {
        setDoing(`正在${doing}`);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props.doings]);

  return (
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
      <div className="flex justify-center text">{doing}</div>
    </main>
  );
};
