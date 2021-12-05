import React from "react";
import ExternalLink from "../components/ExternalLink";
import Record from "../Record";
import TailwindCSS from "../TailwindCSS";

export default () => (
  <footer className="p-2 flex flex-col md:flex-row justify-center items-center space-x-5 text-gray-400">
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
      <ExternalLink href={"https://www.tailwindcss.cn/"}>
        <TailwindCSS />
      </ExternalLink>
    </div>
  </footer>
);
