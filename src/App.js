import React from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default () => (
  <div className="min-w-screen min-h-screen flex flex-col justify-between bg-random bg-cover bg-center transition-opacity duration-700 text-sm text-gray-200">
    <Header />
    <Main />
    <Footer />
  </div>
);
