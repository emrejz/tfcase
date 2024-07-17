import * as React from "react";
const SvgBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#back_svg__a)">
      <path
        fill="#606B79"
        fillRule="evenodd"
        d="M14.53 5.47a.75.75 0 0 1 0 1.06L9.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06l-5.647-5.646a1.25 1.25 0 0 1 0-1.768L13.47 5.47a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="back_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBack;
