import React from 'react';

const EmailIcon = ({ width = 27, height = 26, color = '#37A05F' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.5" cy="13" r="13" fill={color} fillOpacity="0.1"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 6.34315 5.34315 5 7 5H20C21.6569 5 23 6.34315 23 8V18C23 19.6569 21.6569 21 20 21H7C5.34315 21 4 19.6569 4 18V8ZM7 7C6.44772 7 6 7.44772 6 8V17.625C6 17.9215 6.16421 18.1963 6.41421 18.3661L12.4142 22.3661C12.7897 22.6077 13.2103 22.6077 13.5858 22.3661L19.5858 18.3661C19.8358 18.1963 20 17.9215 20 17.625V8C20 7.44772 19.5523 7 19 7H7Z" fill={color}/>
    </svg>
  );
};

export default EmailIcon;
