import IconProps from "./icon.type";

export default function ThreeDotIcon({
  w = "34",
  h = "34",
  className,
}: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6719 7.96875C15.6719 7.70607 15.7498 7.44929 15.8957 7.23088C16.0416 7.01247 16.2491 6.84225 16.4917 6.74172C16.7344 6.6412 17.0015 6.6149 17.2591 6.66615C17.5167 6.71739 17.7534 6.84388 17.9391 7.02962C18.1249 7.21537 18.2514 7.45202 18.3026 7.70965C18.3539 7.96728 18.3276 8.23432 18.227 8.477C18.1265 8.71969 17.9563 8.92711 17.7379 9.07305C17.5195 9.21898 17.2627 9.29688 17 9.29688C16.6478 9.29688 16.3099 9.15695 16.0609 8.90788C15.8118 8.65881 15.6719 8.32099 15.6719 7.96875ZM17 15.6719C16.7373 15.6719 16.4805 15.7498 16.2621 15.8957C16.0437 16.0416 15.8735 16.2491 15.773 16.4917C15.6725 16.7344 15.6461 17.0015 15.6974 17.2591C15.7486 17.5167 15.8751 17.7534 16.0609 17.9391C16.2466 18.1249 16.4833 18.2514 16.7409 18.3026C16.9985 18.3539 17.2656 18.3276 17.5083 18.227C17.7509 18.1265 17.9584 17.9563 18.1043 17.7379C18.2502 17.5195 18.3281 17.2627 18.3281 17C18.3281 16.6478 18.1882 16.3099 17.9391 16.0609C17.6901 15.8118 17.3522 15.6719 17 15.6719ZM17 24.7031C16.7373 24.7031 16.4805 24.781 16.2621 24.927C16.0437 25.0729 15.8735 25.2803 15.773 25.523C15.6725 25.7657 15.6461 26.0327 15.6974 26.2904C15.7486 26.548 15.8751 26.7846 16.0609 26.9704C16.2466 27.1561 16.4833 27.2826 16.7409 27.3339C16.9985 27.3851 17.2656 27.3588 17.5083 27.2583C17.7509 27.1578 17.9584 26.9875 18.1043 26.7691C18.2502 26.5507 18.3281 26.2939 18.3281 26.0312C18.3281 25.679 18.1882 25.3412 17.9391 25.0921C17.6901 24.8431 17.3522 24.7031 17 24.7031Z"
        fill="#585858"
        className={className}
      />
    </svg>
  );
}