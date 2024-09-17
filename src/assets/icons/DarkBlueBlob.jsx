import * as React from "react";
const DarkBlueBlob = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1202}
    height={1011}
    fill="none"
    {...props}
  >
    <g filter="url(#dark-blue-blob-filter)" opacity={0.12}>
      <path
        fill="#2B3BB8"
        fillRule="evenodd"
        d="M553.874 278.814c53.61-8.901 101.926-29.553 155.494-20.402 70.569 12.055 149.33 21.093 190.673 79.539 46.959 66.385 58.307 156.404 30.203 232.708-28.379 77.053-99.066 128.29-174.827 159.957-73.775 30.837-153.42 30.552-230.557 9.488-87.769-23.968-181.446-54.616-225.737-134.09-47.031-84.39-63.699-202.536-4.348-278.766 56.113-72.07 168.994-33.474 259.099-48.434Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="dark-blue-blob-filter"
        width={1200.77}
        height={1010.85}
        x={0.672}
        y={0.123}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_250_32"
          stdDeviation={128}
        />
      </filter>
    </defs>
  </svg>
);
export default DarkBlueBlob;
