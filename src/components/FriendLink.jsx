import React from "react";
import ExternalLink from "../components/ExternalLink";

const FriendLinks = ({ links = [] }) => {
  const linkItems = links.map((link) => (
    <ExternalLink href={link.url} key={link.id} referrer="no-referrer">
      {link.title}
    </ExternalLink>
  ));

  return links.length ? (
    <div className="flex items-center space-x-2">
      <h2>友情链接：</h2>
      {linkItems}
    </div>
  ) : null;
};

export default FriendLinks;
