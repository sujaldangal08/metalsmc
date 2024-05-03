import IconProps from "./icon.type";

export default function DriverManagementIcon({
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
        d="M16.101 3.75L13.494 6.33446H10.9102C7.61968 6.33446 5.56958 8.63189 5.56958 11.8926V20.6906C5.56958 23.9526 7.60864 26.25 10.9102 26.25H21.3031C24.5935 26.25 26.6436 23.9526 26.6436 20.6906V11.8926C26.6436 8.63189 24.5935 6.33446 21.3031 6.33446H18.7082L16.101 3.75Z"
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
        d="M15.8589 21.0571C12.7037 21.0571 10.0093 21.5816 10.0093 23.6821C10.0093 25.7826 12.6866 26.3259 15.8589 26.3259C19.0141 26.3259 21.7078 25.8005 21.7078 23.7009C21.7078 21.6013 19.0312 21.0571 15.8589 21.0571Z"
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
        d="M16.0448 18.4255C18.1079 18.4255 19.78 16.7672 19.78 14.722C19.78 12.6769 18.1079 11.0193 16.0448 11.0193C13.9818 11.0193 12.3089 12.6769 12.3089 14.722C12.3019 16.7603 13.9632 18.4186 16.0185 18.4255H16.0448Z"
        stroke="white"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        fillOpacity={0}
      />
    </svg>
  );
}
