import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import register from "./pages/register";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
            <Route path="/register" component={register} />
        </BrowserRouter>
    );
}

export default Routes;
