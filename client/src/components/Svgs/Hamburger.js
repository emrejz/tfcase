import * as React from "react";
const SvgHamburger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#242424"
      d="M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"
    />
  </svg>
);
export default SvgHamburger;
