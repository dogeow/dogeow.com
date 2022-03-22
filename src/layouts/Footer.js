import React from "react";
import ExternalLink from "../components/ExternalLink";
import Record from "../Record";
import TailwindCSS from "../TailwindCSS";

export default () => (
  <footer className="flex items-center flex-col text-gray-400">
    <div className="p-2 flex md:flex-row justify-center space-x-5">
      <h2>友情链接：</h2>
      <ExternalLink href={"https://www.52car.xyz/"}>李山河</ExternalLink>
    </div>
    <div className="p-2 flex md:flex-row flex-col justify-center space-x-5">
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
    </div>
  </footer>
);
