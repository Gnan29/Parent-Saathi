import React from 'react';

interface LoadingFanProps {
  size?: number;
}

const LoadingFan: React.FC<LoadingFanProps> = ({ size = 80 }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <img
          src="/image.png"
          alt="Loading"
          className="w-full h-full animate-spin"
          style={{ animationDuration: '1s' }}
        />
      </div>
      <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingFan;
