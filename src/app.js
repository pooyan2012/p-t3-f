import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./app.css";

import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
