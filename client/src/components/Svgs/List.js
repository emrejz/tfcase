import * as React from "react";
const SvgList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <g clipPath="url(#list_svg__a)">
      <path
        stroke="#1053FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.11 4.5h7m-7 4h7m-7 4h7"
      />
      <path
        fill="#1053FF"
        d="M4.11 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.11 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.11 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="list_svg__a">
        <path fill="#fff" d="M.61.5h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgList;
