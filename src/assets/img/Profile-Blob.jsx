import React from "react";

const ProfileBlob = () => {
  return (
    <svg width={150} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b" gradientTransform="rotate(-45 .5 .5)">
          <stop offset="0%" stop-color="#21D4FD" />
          <stop offset="100%" stop-color="#B721FF" />
        </linearGradient>
        <clipPath id="a">
          <path
            fill="currentColor"
            d="M814 610q-51 110-140.5 237.5t-202 11.5Q359 743 262 682.5T110.5 480Q56 338 211.5 303.5T470 177q103-92 214-8.5T830 376q35 124-16 234Z"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <path
          fill="url(#b)"
          d="M814 610q-51 110-140.5 237.5t-202 11.5Q359 743 262 682.5T110.5 480Q56 338 211.5 303.5T470 177q103-92 214-8.5T830 376q35 124-16 234Z"
        />
      </g>
    </svg>
  );
};
export default ProfileBlob;
