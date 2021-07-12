import React from "react";
import Navbar from "./components/navbar";
import Home from './components/home';
import Films from './components/films';
import People from './components/people';
const { BrowserRouter, Switch, Route } = require("react-router-dom")

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/films'>
            <Films />
          </Route>
          <Route exact path='/People'>
            <People />
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default App;
