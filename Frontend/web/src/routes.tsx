import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import register from "./pages/register";
import dashboard from "./pages/dashboard";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
            <Route path="/register" component={register} />
            <Route path="/dashboard" component={dashboard} />
        </BrowserRouter>
    );
}

export default Routes;
