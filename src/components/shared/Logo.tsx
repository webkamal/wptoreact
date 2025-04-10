import React from "react";

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary" // Uses your primary color
    >
      {/* Custom SVG path - WordPress "W" inspired */}
      <path
        d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 22c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        fill="currentColor"
      />
      <path d="M21 11.5l-5 8-5-8h10z" fill="currentColor" />
    </svg>
  );
}
