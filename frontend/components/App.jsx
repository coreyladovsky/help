import React from 'react';
import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <h1>Help!</h1>
    </header>
    <Switch>
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/login" component={SessionFormContainer}/>

    </Switch>
  </div>
);

export default App;
