export default function DownArrowIcon({
  height,
  width,
  className,
  onClick,
}: {
  height?: string;
  width?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M12 16.7999C11.3 16.7999 10.6 16.5299 10.07 15.9999L3.54998 9.47989C3.4105 9.33875 3.33228 9.14832 3.33228 8.94989C3.33228 8.75146 3.4105 8.56103 3.54998 8.41989C3.83998 8.12989 4.31998 8.12989 4.60998 8.41989L11.13 14.9399C11.61 15.4199 12.39 15.4199 12.87 14.9399L19.39 8.41989C19.68 8.12989 20.16 8.12989 20.45 8.41989C20.74 8.70989 20.74 9.18989 20.45 9.47989L13.93 15.9999C13.4 16.5299 12.7 16.7999 12 16.7999Z"
        fill="black"
      />
    </svg>
  );
}
