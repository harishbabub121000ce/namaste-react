const ChevronDownIcon = ({ size = 16, color = "currentColor", ...props }) => (
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
      d="M4.47 5.47a.75.75 0 0 1 1.06 0L8 7.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L8 10.06 4.47 6.53a.75.75 0 0 1 0-1.06z"
      fill={color}
    />
  </svg>
);

export default ChevronDownIcon;
