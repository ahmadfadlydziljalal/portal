import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Card({ props }) {
  return (
    <div class={"rounded overflow-hidden shadow-lg " + props.background}>
      <div class="px-6 py-4">
        <div class="flex justify-between">
          <div class="font-bold text-xl mb-2">{props.title}</div>

          <Link to={{ pathname: props.url }} target="_blank">
            <ExternalLinkIcon className="h-8 w-8 text-blue-900" />
          </Link>
        </div>
        <p class="text-gray-700 text-base">{props.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        {props.tags.map((tag) => (
          <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
