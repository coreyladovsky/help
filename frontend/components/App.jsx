import React from 'react';
import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Help!</h1>
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <Route path="/help" component={LandingContainer} />
    </Switch>
  </div>
);

export default App;
