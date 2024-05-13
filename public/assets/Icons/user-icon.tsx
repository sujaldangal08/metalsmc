import IconProps from "./icon.type";

export default function UserIcon({
  w = "30",
  h = "30",
  className = "",
}: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M5.84001 20.5399C5.02515 18.9954 4.56299 17.2196 4.56299 15.3466C4.56299 9.13182 9.59813 4.09668 15.813 4.09668C22.0279 4.09668 27.063 9.13182 27.063 15.3466C27.063 17.2319 26.6009 19.0196 25.7737 20.5764"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        fillOpacity={0}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8951 14.5539C19.8951 16.8294 18.0501 18.6732 15.7759 18.6732C13.5002 18.6732 11.6553 16.8294 11.6553 14.5539C11.6553 12.2783 13.5002 10.4346 15.7759 10.4346C18.0501 10.4346 19.8951 12.2783 19.8951 14.5539Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        fillOpacity={0}
      />
      <path
        d="M9.37744 25.8683C9.63285 23.8858 11.3964 21.6846 15.7748 21.6846C20.2018 21.6846 21.9531 23.8981 22.1964 25.9048"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        fillOpacity={0}
      />
    </svg>
  );
}
