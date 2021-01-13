import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { CotizarScreen } from "../components/cotizar/CotizarScreen";
import { Navbar } from "../components/ui/Navbar";
import { CotizacionScreen } from "../components/cotizar/CotizacionScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/cotizar" component={CotizarScreen}></Route>
          <Route exact path="/cotizacion" component={CotizacionScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
};
