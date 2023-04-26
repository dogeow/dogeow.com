import React from "react";
import ExternalLink from "../components/ExternalLink";
import Record from "../resources/ICP";
import TailwindCSS from "../resources/TailwindCSS";
import FriendLink from "../components/FriendLink";

export default function Footer(props) {
  return (
    <footer className="flex flex-col items-center text-gray-400">
      <FriendLink
        links={props.links}
        className="p-2 flex flex-row justify-center space-x-5"
      />
      <div className="p-2 flex md:flex-row flex-col justify-center space-x-5">
        <ExternalLink href={"http://www.beian.gov.cn/"}>
          <figure className="flex items-center">
            <img src={Record} alt="备案图标" style={{ verticalAlign: "top" }} />
            <figcaption>闽公网安备35020302033650号</figcaption>
          </figure>
        </ExternalLink>
        <ExternalLink href={"https://beian.miit.gov.cn/"}>
          闽ICP备19021694号
        </ExternalLink>
        <div className="flex items-center space-x-1">
          <span>Powered by</span>
          <ExternalLink href={props.tailwindCSSLink}>
            <TailwindCSS />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
