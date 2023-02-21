import React, { useEffect } from "react";
import projects from "../resources/projects.json";

const todos = [
  "正在学习英语 & 锻炼身体",
  "正在使用 Next.js + antd 写网址导航",
  "正在看《三体》和《电锯人》",
  "正在学习 Golang",
];

const todoAndDotMaxLength = 4; // todo 加上小数点额最大长度（todo 为一个单位），比如 「正在学习 Golang...」，那么长度为 4，其中小数点最长为 3 位。

export default () => {
  const [todo, setTodo] = React.useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      // 时间戳，秒
      const timestamp = Math.floor(Date.now() / 1000);
      const todoRemainder = timestamp % (todos.length * todoAndDotMaxLength); // 增加的小数点也要上上去
      const todoDotRemainder = todoRemainder % todos.length; // 第几个小数点
      const todo = todos[parseInt((todoRemainder / todos.length).toString())]; // 第几个 todo
      // 小数点区间
      if (todoDotRemainder !== 0) {
        const todoAndDot = todo + Array(todoDotRemainder).fill(".").join("");
        setTodo(todoAndDot);
      } else {
        setTodo(todo);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <div className="flex justify-center text">{todo}</div>
    </main>
  );
};
