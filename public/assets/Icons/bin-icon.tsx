import IconProps from "./icon.type";

export default function ({ w = "25", h = "24", className }: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.115 19.77C7.655 19.77 7.271 19.616 6.963 19.308C6.65433 18.9993 6.5 18.615 6.5 18.155V5.77H5.5V4.77H9.5V4H15.5V4.77H19.5V5.77H18.5V18.155C18.5 18.615 18.346 18.999 18.038 19.307C17.7293 19.6157 17.345 19.77 16.885 19.77H8.115ZM10.308 16.77H11.308V7.77H10.308V16.77ZM13.692 16.77H14.692V7.77H13.692V16.77Z"
        fill="#706F6F"
        className={className}
      />
    </svg>
  );
}
