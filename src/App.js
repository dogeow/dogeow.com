import React from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default () => {
  const changeBg = () => {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('https://api.dogeow.com/images?action=random&timestamp=${Date.now()}')`;
  };
  return (
    <div
      id="app"
      className="min-w-screen min-h-screen flex flex-col justify-between bg-random bg-cover bg-center transition-opacity duration-700 text-sm text-gray-200"
      onClick={changeBg}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
