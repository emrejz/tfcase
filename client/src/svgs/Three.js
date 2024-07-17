import * as React from "react";
const SvgThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <g clipPath="url(#three_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8 2.25a2 2 0 0 0-.75 3.855V7.75H5a2.75 2.75 0 0 0-2.75 2.75v.395a2 2 0 1 0 1.5 0V10.5c0-.69.56-1.25 1.25-1.25h2.25v1.645a2 2 0 1 0 1.5 0V9.25H11c.69 0 1.25.56 1.25 1.25v.395a2 2 0 1 0 1.5 0V10.5A2.75 2.75 0 0 0 11 7.75H8.75V6.105A2 2 0 0 0 8 2.25m-.5 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m5 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-10 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="three_svg__a">
        <path fill="#fff" d="M0 .5h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThree;
