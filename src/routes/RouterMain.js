import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navber from "../components/Navber";
import AboutUs from "../pages/AboutUs";
import OurService from "../pages/OurService";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export default class RouterMain extends Component {
  render() {
    return (
      <>
        <Router>
          <Navber />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/ourservice" component={OurService} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}
