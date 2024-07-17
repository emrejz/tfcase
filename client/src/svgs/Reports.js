import * as React from "react";
const SvgReports = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#reports_svg__a)">
      <path
        fill="#606B79"
        fillRule="evenodd"
        d="M7.667 6.667a1 1 0 1 0-2 0v18c0 .92.746 1.666 1.666 1.666h18a1 1 0 0 0 0-2H7.667zM13 13.333a1 1 0 0 0-2 0V20a1 1 0 1 0 2 0zM17.333 7a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m6.334 10.333a1 1 0 0 0-2 0V20a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="reports_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReports;
