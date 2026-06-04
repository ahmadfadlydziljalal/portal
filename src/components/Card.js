import React, { useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const glowByBackground = {
  "bg-yellow-200": "rgba(245, 158, 11, 0.30)",
  "bg-purple-300": "rgba(139, 92, 246, 0.28)",
  "bg-pink-200": "rgba(236, 72, 153, 0.24)",
  "bg-yellow-100": "rgba(250, 204, 21, 0.24)",
  "bg-white": "rgba(148, 163, 184, 0.18)",
  "bg-red-300": "rgba(248, 113, 113, 0.26)",
  "bg-green-300": "rgba(74, 222, 128, 0.24)",
  "bg-purple-100": "rgba(192, 132, 252, 0.22)",
  "bg-yellow-300": "rgba(250, 204, 21, 0.30)",
  "bg-red-800": "rgba(185, 28, 28, 0.30)",
  "bg-pink-500": "rgba(236, 72, 153, 0.30)",
  "bg-blue-500": "rgba(59, 130, 246, 0.30)",
  "bg-purple-200": "rgba(168, 85, 247, 0.24)",
};

export default function Card({ props }) {
  const [isHovered, setIsHovered] = useState(false);
  const glowColor = glowByBackground[props.background] || "rgba(59, 130, 246, 0.24)";

  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative block h-full cursor-pointer no-underline transition-all duration-300 ease-out"
      style={{
        transform: isHovered ? "translateY(-10px) scale(1.01)" : "translateY(0) scale(1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-4 top-8 bottom-0 rounded-[1.75rem] opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100"
        style={{
          backgroundColor: glowColor,
          transform: isHovered ? "translateY(10px) scale(0.96)" : "translateY(0) scale(0.9)",
        }}
      />

      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 ${props.background} transition-all duration-300 group-hover:border-gray-300`}
        style={{
          boxShadow: isHovered
            ? `0 22px 38px rgba(15, 23, 42, 0.16), 0 10px 24px ${glowColor}`
            : "0 8px 18px rgba(15, 23, 42, 0.08)",
        }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>

        {/* Content */}
        <div className="relative flex h-full flex-col">
          {/* Header Section */}
          <div className="flex-grow px-5 py-4 sm:px-6 sm:py-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className={`font-bold text-lg leading-snug transition-all duration-300 group-hover:translate-x-1 ${props.textColor}`}>
                {props.title}
              </h3>
              <ExternalLinkIcon className={`h-6 w-6 flex-shrink-0 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${props.textColor}`} />
            </div>
            
            <p className={`text-sm leading-relaxed opacity-90 transition-opacity duration-300 group-hover:opacity-100 ${props.textColor}`}>
              {props.description}
            </p>
          </div>

          {/* Tags Section */}
          <div className="px-5 pb-4 pt-1 sm:px-6 sm:pb-5 sm:pt-2">
            <div className="flex flex-wrap gap-2">
              {props.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-gray-900 bg-opacity-70 px-3 py-1 text-xs font-semibold text-white transition-all duration-200 hover:bg-opacity-100"
                >
                  {tag}
                </span>
              ))}
              {props.tags.length > 3 && (
                <span className="inline-flex items-center px-2 text-xs text-gray-600">
                  +{props.tags.length - 3} lagi
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
