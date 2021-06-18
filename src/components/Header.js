import React from "react";
import { withRouter } from "react-router-dom";

function Header(props) {
  const title = props.location.pathname.slice(1);
  return (
    <header>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">
          {title[0] ? title.replace(/^./, title[0].toUpperCase()) : ""}
        </h1>
      </div>
    </header>
  );
}

export default withRouter(Header);
