const StarsBlack = ({ fill = "#000", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={79}
    height={15}
    fill="none"
    {...props}
  >
    <g clipPath="url(#black-star-1)">
      <path
        fill={fill}
        d="m7.5.5 2.41 4.484 5.09.864-3.602 3.634.735 5.018L7.5 12.263 2.864 14.5 3.6 9.482 0 5.848l5.087-.864L7.5.5Z"
      />
    </g>
    <g clipPath="url(#black-star-2)">
      <path
        fill={fill}
        d="m23.5.5 2.41 4.484 5.09.864-3.602 3.634.735 5.018-4.633-2.237-4.636 2.237.736-5.018L16 5.848l5.087-.864L23.5.5Z"
      />
    </g>
    <g clipPath="url(#black-star-3)">
      <path
        fill={fill}
        d="m39.5.5 2.41 4.484 5.09.864-3.602 3.634.735 5.018-4.633-2.237-4.636 2.237.736-5.018L32 5.848l5.087-.864L39.5.5Z"
      />
    </g>
    <g clipPath="url(#black-star-4)">
      <path
        fill={fill}
        d="m55.5.5 2.41 4.484 5.09.864-3.602 3.634.735 5.018-4.633-2.237-4.636 2.237.736-5.018L48 5.848l5.087-.864L55.5.5Z"
      />
    </g>
    <g clipPath="url(#black-star-5)">
      <path
        fill={fill}
        d="m71.5.5 2.41 4.484 5.09.864-3.602 3.634.735 5.018-4.633-2.237-4.636 2.237.736-5.018L64 5.848l5.087-.864L71.5.5Z"
      />
    </g>
    <defs>
      <clipPath id="black-star-1">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
      <clipPath id="black-star-2">
        <path fill="#fff" d="M16 0h15v15H16z" />
      </clipPath>
      <clipPath id="black-star-3">
        <path fill="#fff" d="M32 0h15v15H32z" />
      </clipPath>
      <clipPath id="black-star-4">
        <path fill="#fff" d="M48 0h15v15H48z" />
      </clipPath>
      <clipPath id="black-star-5">
        <path fill="#fff" d="M64 0h15v15H64z" />
      </clipPath>
    </defs>
  </svg>
);
export default StarsBlack;
