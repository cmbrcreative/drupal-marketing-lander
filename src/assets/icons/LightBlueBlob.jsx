import * as React from "react";
const LightBlueBlob = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1104}
    height={577}
    fill="none"
    {...props}
  >
    <g filter="url(#light-blue-blob-filter)" opacity={0.2}>
      <path
        fill="#0085A2"
        fillRule="evenodd"
        d="M386.452-229.867c66.157-24.483 134.261 17.274 197.905 47.698 56.535 27.027 102.74 63.902 140.366 114.011C778.222 3.091 871.678 76.787 841.841 160.741c-29.796 83.835-150.788 74.817-235.129 103.151-71.033 23.863-143.373 78.771-211.129 46.767-66.424-31.375-67.983-121.426-93.093-190.463C280.314 59.229 244.858.953 259.989-62.132c16.978-70.785 58.195-142.472 126.463-167.735Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="light-blue-blob-filter"
        width={1103.24}
        height={1069.67}
        x={0.343}
        y={-493.246}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_96_1318"
          stdDeviation={128}
        />
      </filter>
    </defs>
  </svg>
);
export default LightBlueBlob;
