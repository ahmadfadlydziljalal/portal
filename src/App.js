import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen ">
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
