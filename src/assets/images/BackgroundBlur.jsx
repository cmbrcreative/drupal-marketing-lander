import * as React from "react";
const BackgroundBlur = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2513 1935"

    fill="none"
    {...props}
  >
    <g opacity={0.12}>
      <g filter="url(#blur1)">
        <path
          fill="#0085A2"
          fillRule="evenodd"
          d="M1265.45 264.133c66.16-24.482 134.26 17.274 197.91 47.698 56.53 27.027 102.74 63.902 140.36 114.012 53.5 71.248 146.96 144.945 117.12 228.898-29.79 83.836-150.79 74.817-235.13 103.151-71.03 23.864-143.37 78.771-211.13 46.768-66.42-31.375-67.98-121.427-93.09-190.464-22.18-60.967-57.63-119.243-42.5-182.328 16.98-70.785 58.19-142.472 126.46-167.735Z"
          clipRule="evenodd"
        />
      </g>
      <g filter="url(#blur2)">
        <path
          fill="#4C00C9"
          fillRule="evenodd"
          opacity={0.9}
          d="M1766.69 310.067c86.39-15.352 145.96 78.618 218.42 128.108 46.69 31.893 93.58 58.319 124.15 105.887 37.69 58.633 75.45 120.942 66.01 189.999-11.75 85.964-43.87 180.726-121.87 218.723-79.12 38.537-176.31 9.161-251.25-36.967-63.7-39.208-75.37-119.409-110.28-185.559-39.61-75.029-119.4-137.873-104.53-221.399 16.26-91.341 88-182.56 179.35-198.792Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <g filter="url(#blur3)" opacity={0.12}>
      <path
        fill="#2B3BB8"
        fillRule="evenodd"
        d="M1865.27 970.799c53.61-8.901 101.93-29.553 155.49-20.402 70.57 12.055 149.33 21.093 190.68 79.543 46.96 66.38 58.3 156.4 30.2 232.7-28.38 77.06-99.07 128.29-174.83 159.96-73.77 30.84-153.42 30.55-230.55 9.49-87.77-23.97-181.45-54.62-225.74-134.09-47.03-84.39-63.7-202.54-4.35-278.77 56.11-72.067 168.99-33.471 259.1-48.431Z"
        clipRule="evenodd"
      />
    </g>
    <g filter="url(#blur4)" opacity={0.12}>
      <path
        fill="#FFC700"
        fillRule="evenodd"
        d="M332.808 1118.77c65.508-50.31 161.348-48.87 237.732-17.44 64.419 26.52 72.67 109.75 117.033 163.46 49.295 59.68 146.967 85.87 152.667 163.06 6.09 82.46-57.491 156.04-125.645 202.85-65.763 45.17-149.387 58.33-226.86 39.28-71.075-17.48-120.15-75.27-162.436-135.01-40.884-57.77-70.416-121.41-69.14-192.17 1.48-82.03 11.578-174.05 76.649-224.03Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="blur1"
        width={1103.24}
        height={1069.67}
        x={879.343}
        y={0.754}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_219_41"
          stdDeviation={128}
        />
      </filter>
      <filter
        id="blur2"
        width={1103.22}
        height={1174.2}
        x={1329.51}
        y={52.392}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_219_41"
          stdDeviation={128}
        />
      </filter>
      <filter
        id="blur3"
        width={1200.77}
        height={1010.85}
        x={1312.07}
        y={692.108}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_219_41"
          stdDeviation={128}
        />
      </filter>
      <filter
        id="blur4"
        width={1096.53}
        height={1111.34}
        x={0.119}
        y={823.099}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_219_41"
          stdDeviation={128}
        />
      </filter>
    </defs>
  </svg>
);
export default BackgroundBlur;
