import React from 'react';

interface DeliveryIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const DeliveryIcon: React.FC<DeliveryIconProps> = ({
  width = 18,
  height = 18,
  stroke = "#434343",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.00019 10.346H9.67327C10.4137 10.346 11.0194 9.7402 11.0194 8.99981V2.26904H4.96173C3.95212 2.26904 3.07039 2.82769 2.6127 3.64884" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.26959 12.365C2.26959 13.4823 3.17152 14.3842 4.28882 14.3842H4.9619C4.9619 13.6439 5.56767 13.0381 6.30805 13.0381C7.04844 13.0381 7.65421 13.6439 7.65421 14.3842H10.3465C10.3465 13.6439 10.9523 13.0381 11.6927 13.0381C12.4331 13.0381 13.0388 13.6439 13.0388 14.3842H13.7119C14.8292 14.3842 15.7311 13.4823 15.7311 12.365V10.3458H13.7119C13.3417 10.3458 13.0388 10.0429 13.0388 9.6727V7.65347C13.0388 7.28328 13.3417 6.98039 13.7119 6.98039H14.5802L13.4292 4.9679C13.1869 4.55059 12.7427 4.28809 12.2581 4.28809H11.0196V8.99962C11.0196 9.74001 10.4138 10.3458 9.67344 10.3458H9.00036" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.30767 15.7309C7.05113 15.7309 7.65382 15.1282 7.65382 14.3847C7.65382 13.6413 7.05113 13.0386 6.30767 13.0386C5.56421 13.0386 4.96152 13.6413 4.96152 14.3847C4.96152 15.1282 5.56421 15.7309 6.30767 15.7309Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6927 15.7309C12.4361 15.7309 13.0388 15.1282 13.0388 14.3847C13.0388 13.6413 12.4361 13.0386 11.6927 13.0386C10.9492 13.0386 10.3465 13.6413 10.3465 14.3847C10.3465 15.1282 10.9492 15.7309 11.6927 15.7309Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.7308 9.00019V10.3463H13.7115C13.3413 10.3463 13.0385 10.0435 13.0385 9.67326V7.65403C13.0385 7.28384 13.3413 6.98096 13.7115 6.98096H14.5798L15.7308 9.00019Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.26959 6.30762H6.30805" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.26959 8.32666H4.9619" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.26959 10.3462H3.61575" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default DeliveryIcon;
