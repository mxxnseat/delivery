import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./pages/header";
import Main from "./pages/main";
import Cart from "./pages/cart";

import "./style/index.scss";

export default () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </React.Fragment>
    )
}