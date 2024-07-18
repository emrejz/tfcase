import * as React from "react";
const SvgGoals = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#goals_svg__a)">
      <path
        fill="#1053FF"
        fillRule="evenodd"
        d="m25.539 7.875-.612.613A11.62 11.62 0 0 1 27.667 16c0 6.443-5.224 11.667-11.667 11.667S4.333 22.443 4.333 16 9.557 4.333 16 4.333a11.62 11.62 0 0 1 7.512 2.74l.643-.642V5.175c0-.177.07-.346.195-.471l1.656-1.656a.333.333 0 0 1 .552.13l.468 1.405a.66.66 0 0 0 .422.421l1.404.468a.333.333 0 0 1 .13.552L27.327 7.68a.67.67 0 0 1-.472.195zM6.333 16A9.667 9.667 0 0 1 16 6.333c2.31 0 4.43.81 6.092 2.161l-2.377 2.377a6.333 6.333 0 1 0 1.414 1.414l2.377-2.377A9.63 9.63 0 0 1 25.666 16a9.667 9.667 0 1 1-19.333 0M16 11.667c.834 0 1.613.236 2.275.644l-2.04 2.039a1.667 1.667 0 1 0 1.414 1.414l2.04-2.039A4.333 4.333 0 1 1 16 11.667"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="goals_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoals;