import React from "react";

const ExternalLink = ({ href, children, referrer }) => {
  const linkProps = {
    className: "block",
    href,
  };

  if (referrer) {
    return <a {...linkProps}>{children}</a>;
  }

  return (
    <a {...linkProps} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
