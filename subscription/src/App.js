import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

// import Landing from './components/Landing';
import Subscription from './components/Subscription';
import AddPlan from './components/AddPlan';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/subscription" component={Subscription}></Route>
            <Route exact path="/subscription/add" component={AddPlan}></Route>
            <Route path="/" component={Subscription}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};