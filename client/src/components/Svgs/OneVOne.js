import * as React from "react";
const SvgOneVOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#one-v-one_svg__a)">
      <path
        fill="#606B79"
        fillRule="evenodd"
        d="M10.666 3a1 1 0 0 1 1 1v1.667h8.667V4a1 1 0 0 1 2 0v1.667H26c.92 0 1.667.746 1.667 1.666v17.334c0 .92-.747 1.666-1.667 1.666H6c-.92 0-1.667-.746-1.667-1.666V7.333c0-.92.746-1.666 1.667-1.666h3.667V4a1 1 0 0 1 .999-1m9.667 4.667V8a1 1 0 0 0 2 0v-.333h3.334v16.666H6.333V7.667h3.334V8a1 1 0 1 0 2 0v-.333zm-7.737 5.666a1 1 0 0 0-1.555-.832l-2 1.334a1 1 0 0 0 1.11 1.664l.445-.297V20a1 1 0 0 0 2 0zm9.472-.881a1 1 0 0 1 .528.881V20a1 1 0 1 1-2 0v-4.798l-.445.297a1 1 0 0 1-1.11-1.664l2-1.334a1 1 0 0 1 1.027-.049m-5.472 1.881a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="one-v-one_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOneVOne;
