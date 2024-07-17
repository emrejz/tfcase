import * as React from "react";
const SvgQm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#qm_svg__a)">
      <path
        fill="#838B95"
        fillRule="evenodd"
        d="M16 6.333A9.667 9.667 0 0 0 6.333 16a9.667 9.667 0 1 0 19.334 0A9.667 9.667 0 0 0 16 6.333M4.333 16C4.333 9.557 9.557 4.333 16 4.333S27.667 9.557 27.667 16 22.443 27.667 16 27.667 4.333 22.443 4.333 16M16 11c-1.328 0-2.333 1.023-2.333 2.2a1 1 0 1 1-2 0c0-2.358 1.979-4.2 4.333-4.2s4.333 1.842 4.333 4.2c0 2.013-1.448 3.655-3.333 4.088V18a1 1 0 1 1-2 0v-.933c0-.958.758-1.574 1.473-1.712 1.09-.211 1.86-1.121 1.86-2.155 0-1.177-1.005-2.2-2.333-2.2m0 11.667a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="qm_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQm;
