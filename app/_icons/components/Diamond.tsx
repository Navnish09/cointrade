import React, { SVGProps } from "react";

export const Diamond = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1597 7.1842L19.2326 3.21844C18.667 2.45219 17.7713 2 16.8189 2H7.18101C6.22864 2 5.33285 2.45219 4.76729 3.21844L1.84018 7.1842C1.04645 8.25957 1.05987 9.73033 1.87309 10.791L9.61913 20.8946C10.8199 22.4609 13.18 22.4609 14.3808 20.8946L22.1268 10.791C22.94 9.73033 22.9534 8.25957 22.1597 7.1842ZM3.72383 8L6.37644 4.40615C6.56496 4.15073 6.86355 4 7.18101 4H16.8189C17.1363 4 17.4349 4.15073 17.6235 4.40615L20.2761 8H3.72383ZM3.78676 10L11.2063 19.6777C11.6066 20.1998 12.3933 20.1998 12.7936 19.6777L20.2131 10H3.78676Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Diamond;