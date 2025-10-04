import React from 'react';

const KalamkariPattern: React.FC = () => {
  return (
    <svg className="w-full h-24 opacity-20" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="kalamkari" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="3" fill="#2563eb" />
          <circle cx="75" cy="25" r="3" fill="#10b981" />
          <circle cx="50" cy="50" r="5" fill="#2563eb" />
          <circle cx="25" cy="75" r="3" fill="#10b981" />
          <circle cx="75" cy="75" r="3" fill="#2563eb" />
          <path d="M 25 25 Q 50 15 75 25" stroke="#10b981" fill="none" strokeWidth="1" />
          <path d="M 25 75 Q 50 85 75 75" stroke="#2563eb" fill="none" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="100" fill="url(#kalamkari)" />
    </svg>
  );
};

export default KalamkariPattern;
