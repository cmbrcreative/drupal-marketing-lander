import * as React from "react";
const PurpleBlob = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1104}
    height={1175}
    fill="none"
    {...props}
  >
    <g filter="url(#purple-blob-filter)" opacity={0.12}>
      <path
        fill="#4C00C9"
        fillRule="evenodd"
        d="M437.687 258.067c86.392-15.352 145.963 78.618 218.42 128.108 46.692 31.893 93.586 58.319 124.157 105.887 37.683 58.633 75.445 120.942 66.005 189.999-11.75 85.964-43.871 180.726-121.873 218.723-79.112 38.537-176.305 9.161-251.246-36.967-63.7-39.208-75.367-119.409-110.284-185.559-39.604-75.029-119.4-137.873-104.527-221.399 16.264-91.341 88.002-182.56 179.348-198.792Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="purple-blob-filter"
        width={1103.22}
        height={1174.2}
        x={0.515}
        y={0.392}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_251_34"
          stdDeviation={128}
        />
      </filter>
    </defs>
  </svg>
);
export default PurpleBlob;
