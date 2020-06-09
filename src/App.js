import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import history from './history';
import MyAccount from "./MyAccount";



export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/"  exact component={Home} />
                <Route path="/signup/"  component={Signup} />
                <Route path="/myaccount/" component={MyAccount}/>

                </Switch>
                
            </Router>
        )
    }
}
