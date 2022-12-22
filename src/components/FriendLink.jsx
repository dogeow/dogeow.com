import React from "react";
import ExternalLink from "../components/ExternalLink";

export default () => (
  <div className="flex items-center space-x-2">
    <h2>友情链接：</h2>
    <ExternalLink href={"https://www.52car.xyz/"} referrer={true}>
      李山河
    </ExternalLink>
    <ExternalLink href={"http://xiaocai.streamcc.top/"} referrer={true}>
      小菜博客
    </ExternalLink>
    <ExternalLink href={"https://www.supereggs.cn/"} referrer={true}>
      小菜博客
    </ExternalLink>
  </div>
);
