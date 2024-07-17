import * as React from "react";
const SvgSurveys = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#surveys_svg__a)">
      <path
        stroke="#606B79"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 6.667H7A.333.333 0 0 0 6.667 7v18c0 .184.15.333.333.333h9.418M20 6.667 25.334 12M20 6.667v5c0 .184.15.333.334.333h5m0 0v4.756M12 12h2.667M12 16h8m-8 4h4m4 1.968L23.333 25l5-5"
      />
    </g>
    <defs>
      <clipPath id="surveys_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSurveys;
