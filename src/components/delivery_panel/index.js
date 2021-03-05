import React from "react";

import Header from "./header";
import Main from "./main";

import "./style/index.scss";

export default () => {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    )
}