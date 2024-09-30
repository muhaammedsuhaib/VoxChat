// src/components/Loading.js
import React from 'react';

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center">
        <svg
          className="animate-spin h-8 w-8 text-gray-500 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
          ></path>
        </svg>
        <p className="text-gray-500 mt-2">{message}</p>
      </div>
    </div>
  );
}
