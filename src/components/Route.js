import React from "react";
import { Router, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

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

            <PrivateRoute path="/view" component={<View />} />
                
            <PrivateRoute path="/logout" component={<Logout />} />
                
        </Router>
    )
}

export default componentRoute;