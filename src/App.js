import React, { useEffect } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default () => {
  const [info, setInfo] = React.useState({
    doings: [],
    links: [],
  });

  useEffect(() => {
    fetch("https://api.dogeow.com/about-me/others")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <div
      id="app"
      className="min-w-screen min-h-screen flex flex-col justify-between bg-random bg-cover bg-center transition-opacity duration-700 text-sm text-gray-200"
    >
      <Header />
      <Main doings={info.doings} />
      <Footer links={info.links} />
    </div>
  );
};
