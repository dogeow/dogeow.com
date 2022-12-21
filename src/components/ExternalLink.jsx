import React from "react";

/**
 * 外部链接
 *
 * @param {object} props
 * @param {string} props.href 链接地址
 * @param {JSX.Element} props.children 子节点
 * @return {JSX.Element}
 */
export default function (props) {
  return props.referrer ? (
    <a className="block" href={props.href}>
      {props.children}
    </a>
  ) : (
    <a className="block" href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
