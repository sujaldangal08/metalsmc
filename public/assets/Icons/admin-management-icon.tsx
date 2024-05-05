import IconProps from "./icon.type";

export default function AdminManagementIcon({
  w = "32",
  h = "32",
  className = "",
}: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8621 14V16C10.2891 16 8.78056 16.6321 7.66827 17.7574C6.55599 18.8826 5.93111 20.4087 5.93111 22H3.9541C3.9541 19.8783 4.78727 17.8434 6.27031 16.3431C7.75336 14.8429 9.7648 14 11.8621 14ZM11.8621 13C8.58525 13 5.93111 10.315 5.93111 7C5.93111 3.685 8.58525 1 11.8621 1C15.139 1 17.7932 3.685 17.7932 7C17.7932 10.315 15.139 13 11.8621 13ZM11.8621 11C14.0467 11 15.8162 9.21 15.8162 7C15.8162 4.79 14.0467 3 11.8621 3C9.67755 3 7.90812 4.79 7.90812 7C7.90812 9.21 9.67755 11 11.8621 11ZM20.7587 17H21.7472V22H13.8392V17H14.8277V16C14.8277 15.2044 15.1401 14.4413 15.6962 13.8787C16.2524 13.3161 17.0067 13 17.7932 13C18.5797 13 19.334 13.3161 19.8901 13.8787C20.4463 14.4413 20.7587 15.2044 20.7587 16V17ZM18.7817 17V16C18.7817 15.7348 18.6775 15.4804 18.4922 15.2929C18.3068 15.1054 18.0554 15 17.7932 15C17.531 15 17.2796 15.1054 17.0942 15.2929C16.9088 15.4804 16.8047 15.7348 16.8047 16V17H18.7817Z"
        className={className}
        strokeWidth={"0"}
      />
    </svg>
  );
}
