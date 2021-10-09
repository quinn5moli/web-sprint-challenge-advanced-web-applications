import React from "react";
import { Router, Route } from "react-router-dom";

import Login from "./Login";
import View from "./View";
import Logout from "./Logout"

function componentRoute() {

    return (
        <Router>

            <Route exact path="/">
                <Login />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/view">
                <View />
            </Route> 

            <Route path="/logout">
                <Logout />
            </Route>
        </Router>
    )
}

export default componentRoute;