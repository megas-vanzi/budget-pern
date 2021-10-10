import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import Ingresos from "./Ingresos";
import Egresos from "./Egresos";

function Abm() {
  return (
    <BrowserRouter>
      <h1 align="center">ABM</h1>
      <div className="Abm">
        <SubNavbar />
        <Switch>
          <Route path="/ingresos" component={Ingresos} />
          <Route path="/egresos" component={Egresos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Abm;
