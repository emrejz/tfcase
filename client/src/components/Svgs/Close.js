import * as React from "react";
const SvgClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#close_svg__a)">
      <path
        fill="#606B79"
        fillRule="evenodd"
        d="M8.965 21.621a1 1 0 0 0 1.414 1.414L16 17.414l5.621 5.621a1 1 0 1 0 1.415-1.414L17.414 16l5.622-5.622a1 1 0 1 0-1.415-1.414L16 14.585l-5.621-5.62a1 1 0 1 0-1.414 1.413L14.585 16z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="close_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClose;
