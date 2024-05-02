import IconProps from "./icon.type";

export default function BackArrowIcon({
  color = "#FAFAFA",
  w = "18",
  h = "17",
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
        d="M0.564056 8.79661L8.71905 16.7705L10.5768 14.954L4.27959 8.79661L10.5768 2.63926L8.71905 0.822754L0.564056 8.79661ZM7.98724 8.79661L16.1422 16.7705L18 14.954L11.7028 8.79661L18 2.63926L16.1422 0.822754L7.98724 8.79661Z"
        fill={color}
      />
    </svg>
  );
}
