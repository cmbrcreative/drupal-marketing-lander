const StarsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={14}
    viewBox="0 0 80 14"
    fill="none"
    {...props}
  >
    <path
        fill="currentColor"
      fillRule="evenodd"
      d="m8 0 2.41 4.484 5.09.864-3.602 3.634.735 5.018L8 11.763 3.364 14 4.1 8.982.5 5.348l5.087-.864L8 0Zm16 0 2.41 4.484 5.09.864-3.602 3.634.735 5.018L24 11.763 19.364 14l.736-5.018-3.6-3.634 5.087-.864L24 0Zm18.41 4.484L40 0l-2.413 4.484-5.087.864 3.6 3.634L35.364 14 40 11.763 44.633 14l-.735-5.018L47.5 5.348l-5.09-.864ZM56 0l2.41 4.484 5.09.864-3.602 3.634.735 5.018L56 11.763 51.364 14l.736-5.018-3.6-3.634 5.087-.864L56 0Zm18.41 4.484L72 0l-2.413 4.484-5.087.864 3.6 3.634L67.364 14 72 11.763 76.633 14l-.735-5.018L79.5 5.348l-5.09-.864Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="stars-gradient"
        x1={13.461}
        x2={66.72}
        y1={9.08}
        y2={11.519}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0085A2" />
        <stop offset={1} stopColor="#4C00C9" />
      </linearGradient>
    </defs>
  </svg>
);
export default StarsIcon;
