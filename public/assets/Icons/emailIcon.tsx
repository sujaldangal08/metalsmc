import React from 'react';

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="13" cy="13" r="13" fill="#37A05F" fillOpacity="0.1" />
    </svg>
  );
};

export default EmailIcon;
