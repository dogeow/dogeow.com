import React from "react";
import ExternalLink from "../components/ExternalLink";
import Record from "../resources/ICP";
import TailwindCSS from "../resources/TailwindCSS";
import FriendLink from "../components/FriendLink";

// 提取友情链接渲染
const renderFriendLinks = (links) => (
  <FriendLink
    links={links}
    className="p-2 flex flex-row justify-center space-x-5"
  />
);

const renderPoweredBy = (tailwindCSSLink) => (
  <div className="flex items-center space-x-1">
    <span className="pl-3">Powered by</span>
    <ExternalLink href={tailwindCSSLink}>
      <TailwindCSS />
    </ExternalLink>
  </div>
);

export default function Footer({ links, tailwindCSSLink }) {
  return (
    <footer className="flex flex-col items-center text-gray-400">
      {renderFriendLinks(links)}

      <div className="p-2 flex md:flex-row flex-col space-x-3">
        {renderPoweredBy(tailwindCSSLink)}

        <ExternalLink href={"https://beian.miit.gov.cn/"}>
          闽ICP备19021694号
        </ExternalLink>

        <ExternalLink href={"http://www.beian.gov.cn/"}>
          <figure className="flex items-center">
            <img src={Record} alt="备案图标" style={{ verticalAlign: "top" }} />
            <figcaption>闽公网安备35020302033650号</figcaption>
          </figure>
        </ExternalLink>
      </div>
    </footer>
  );
}
