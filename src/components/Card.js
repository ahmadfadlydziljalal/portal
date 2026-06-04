import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Card({ props }) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative ${props.background} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col cursor-pointer border border-gray-200`}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative flex flex-col h-full">
        {/* Header Section */}
        <div className="px-6 py-5 flex-grow">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className={`font-bold text-lg leading-snug ${props.textColor}`}>
              {props.title}
            </h3>
            <ExternalLinkIcon className={`h-6 w-6 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity ${props.textColor}`} />
          </div>
          
          <p className={`text-sm leading-relaxed ${props.textColor} opacity-90`}>
            {props.description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="px-6 pb-5 pt-2">
          <div className="flex flex-wrap gap-2">
            {props.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center bg-gray-900 bg-opacity-70 hover:bg-opacity-100 rounded-full px-3 py-1 text-xs font-semibold text-white transition-all duration-200"
              >
                {tag}
              </span>
            ))}
            {props.tags.length > 3 && (
              <span className="inline-flex items-center text-xs text-gray-600 px-2">
                +{props.tags.length - 3} lagi
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
