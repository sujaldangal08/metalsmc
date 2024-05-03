export default function GoogleIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#167EE6"
          d="M23.1 9.91h-9.8a.78.78 0 0 0-.78.79v3.12c0 .44.35.79.79.79h5.5a7.36 7.36 0 0 1-3.16 3.7L18 22.4c3.77-2.18 6-6 6-10.3 0-.6-.04-1.04-.13-1.53a.79.79 0 0 0-.77-.65Z"
        />
        <path
          fill="#12B347"
          d="M12 19.3a7.3 7.3 0 0 1-6.32-3.65L1.6 17.99A11.98 11.98 0 0 0 18 22.4l-2.35-4.07a7.25 7.25 0 0 1-3.65.98Z"
        />
        <path
          fill="#0F993E"
          d="M18 22.4v-.01l-2.35-4.07a7.25 7.25 0 0 1-3.65.99V24c2.18 0 4.23-.6 6-1.61Z"
        />
        <path
          fill="#FFD500"
          d="M4.7 12c0-1.33.36-2.57.98-3.65L1.61 6.01a11.88 11.88 0 0 0 0 11.99l4.07-2.35A7.25 7.25 0 0 1 4.7 12Z"
        />
        <path
          fill="#FF4B26"
          d="M12 4.7c1.76 0 3.37.62 4.63 1.66.32.26.77.24 1.05-.05L19.9 4.1a.79.79 0 0 0-.05-1.16A11.96 11.96 0 0 0 1.61 6.01l4.07 2.34A7.3 7.3 0 0 1 12 4.7Z"
        />
        <path
          fill="#D93F21"
          d="M16.64 6.36c.3.26.76.24 1.05-.05L19.9 4.1a.79.79 0 0 0-.04-1.16A11.96 11.96 0 0 0 12 0v4.7c1.76 0 3.38.62 4.64 1.66Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
