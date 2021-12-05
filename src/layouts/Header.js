import React from "react";

export default () => (
  <header className="flex justify-between">
    <div className="p-2">{process.env.REACT_APP_NAME}</div>
    <div className="p-2">小李世界</div>
  </header>
);
