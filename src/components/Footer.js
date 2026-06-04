import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Portal Aplikasi TMS GROUP</span>
              <br />
              Powered by <span className="text-red-500 font-semibold">ReactJS</span> & <span className="text-blue-500 font-semibold">TailwindCSS</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-600 text-sm">
              <span className="text-gray-800 font-semibold">© 2026 TMS GROUP</span>
              <br />
              <span className="text-xs">Created with ❤️ by Dzil | CTO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
