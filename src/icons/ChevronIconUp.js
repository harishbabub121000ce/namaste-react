const ChevronUpIcon = ({ size = 16, color = "currentColor", ...props }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.47 10.53a.75.75 0 0 1 0-1.06L8 5.94l3.53 3.53a.75.75 0 1 1-1.06 1.06L8 7.06l-2.47 2.47a.75.75 0 0 1-1.06 0z"
      fill={color}
    />
  </svg>
);

export default ChevronUpIcon;
