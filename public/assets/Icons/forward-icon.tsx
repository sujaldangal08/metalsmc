import IconProps from "./icon.type";

export default function ForwardIcon({
  w = "18",
  h = "17",
  color = "#FAFAFA",
}: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4359 8.79661L9.28095 16.7705L7.42319 14.954L13.7204 8.79661L7.42318 2.63926L9.28095 0.822754L17.4359 8.79661ZM10.0128 8.79661L1.85777 16.7705L6.31726e-07 14.954L6.29723 8.79661L8.12055e-08 2.63926L1.85777 0.822754L10.0128 8.79661Z"
        fill={color}
      />
    </svg>
  );
}
