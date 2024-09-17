import * as React from "react";
const YellowBlob = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1097}
    height={1112}
    fill="none"
    {...props}
  >
    <g filter="url(#yellow-blob-filter)" opacity={0.12}>
      <path
        fill="#FFC700"
        fillRule="evenodd"
        d="M332.713 296.124c65.508-50.315 161.348-48.874 237.732-17.436 64.419 26.515 72.67 109.744 117.033 163.454 49.294 59.68 146.966 85.871 152.667 163.066 6.09 82.457-57.491 156.032-125.645 202.844-65.763 45.171-149.387 58.333-226.861 39.281-71.074-17.478-120.15-75.272-162.435-135.014-40.884-57.763-70.417-121.408-69.14-192.164 1.48-82.036 11.578-174.052 76.649-224.031Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="yellow-blob-filter"
        width={1096.53}
        height={1111.34}
        x={0.024}
        y={0.453}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_249_30"
          stdDeviation={128}
        />
      </filter>
    </defs>
  </svg>
);
export default YellowBlob;
