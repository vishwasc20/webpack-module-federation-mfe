import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SubscriptionApp from './components/SubscriptionApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import Landing from "./components/Landing";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header signedIn={false} onSignOut={undefined}/>
        <Switch>
          <Route exact path="/login" component={AuthApp}></Route>
          <Route exact path="/coupon" component={AuthApp}></Route>
          <Route exact path="/subscription" component={SubscriptionApp}></Route>
          <Route path="/" component={Landing}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};