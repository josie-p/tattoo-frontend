import React from "react";

import loadingStyling from "./styling/loadingStyling.css";

const Loading = () => {
  return (
    <div id="loading-screen">
      <svg
        width="155"
        height="155"
        viewBox="0 0 155 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="77.5"
          cy="77.5"
          r="60"
          stroke="currentColor"
          stroke-width="35"
        />
        <path
          d="M94.68 20.012A59.998 59.998 0 0 1 137.5 77.5"
          stroke="currentColor"
          stroke-width="35"
        />
      </svg>
      loading joann's work
    </div>
  );
};

export default Loading;
