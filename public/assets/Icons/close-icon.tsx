import IconProps from "./icon.type";

export default function CloseIcon({ className, w = "9", h = "10" }: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.964111 8.53484L8.03611 1.46484M0.964111 1.46484L8.03611 8.53484"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={className}
        fillOpacity={0}
      />
    </svg>
  );
}
