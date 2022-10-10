import React from "react";
import{BrowserRouter, Route, Switch} from "react-router-dom";

import Login from "../pages/Login";
import MantenimientoE from "../pages/MantenimientoE";
import Palindromos from "../pages/palindromos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/MantenimientoE" component={MantenimientoE} />
        <Route exact path="/Palindromos" component={Palindromos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
