/** @format */

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 0a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6z" />
              <path d="M2 6L16 6" />
              <path d="M4 12L20 12" />
              <path d="M10 18L14 18" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 8l-4 4-4-4" />
              <line x1="12" y1="19" x2="12" y2="11" />
            </svg>
          </a>
          <a href="mailto:youremail@example.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
