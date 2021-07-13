import React from "react";
import Navbar from "./components/navbar";
import routes from './data/routes'
const { BrowserRouter, Switch, Route } = require("react-router-dom")

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {routes.map(route => {
            return (
              <Route key={route.path} exact path={route.path}>
                <route.func />
              </Route>
            )
          })}
        </Switch>
      </BrowserRouter>
  );
};

export default App;
