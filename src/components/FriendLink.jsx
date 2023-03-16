import React from "react";
import ExternalLink from "../components/ExternalLink";

export default (props) => (
  <div className="flex items-center space-x-2">
    <h2>友情链接：</h2>
    {props.links.length &&
      props.links.map((link, index) => (
        <ExternalLink href={link.url} referrer={true} key={index}>
          {link.title}
        </ExternalLink>
      ))}
  </div>
);
