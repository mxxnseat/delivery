import React from "react";
import {Switch, Route} from "react-router-dom";


import Delivery_panel from "./components/delivery_panel";
import Shop from "./components/shop";


function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/delivery_panel" component={Delivery_panel} />
        <Route path="/" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
