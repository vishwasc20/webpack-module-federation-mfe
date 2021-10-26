import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import AuthHome from "./components/AuthHome";
import CouponHome from "./components/CouponHome";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={AuthHome}></Route>
            <Route path="/coupon" component={CouponHome}></Route>
            <Route path="/" component={AuthHome}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
