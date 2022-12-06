import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import NewRootRootRoot1 from "./DesktopRootRoot1/DesktopRootRoot1";
//import Contact from "./Contact/Contact";
//import Products from "./Product/Products";
import DesktopRootRoot1 from "./NewRootRootRoot1/ NewRootRootRoot1";
import search from "./search/search";
import bmi from './bmi/bmi';
import bmi2 from './bmi2/bmi2';
import input from './input/input';
//import parse from './parse/parse';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/signin" exact component={DesktopRootRoot1} />
                    <Route path="/home" component={NewRootRootRoot1} />
                    <Route path="/search" component={search} />
                    <Route path="/bmidesktop" component={bmi} />
                    <Route path="/bmi2" component={bmi2} />
                   
                    <Route path="/input" component={input} />
                </Switch>
            </Router>
        )
    }
}
