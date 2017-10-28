import React from 'react';
import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session/session_form_container';
import BusinessContainer from './business/business_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ReviewsContainer from './reviews/reviews_container';

const App = () => (
  <div>
    <header>
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <ProtectedRoute path="/reviews" component={ReviewsContainer}/>
      <Route exact path="/search" component={BusinessContainer} />
      <Route exact path="/" component={LandingContainer} />
    </Switch>
  </div>
);

export default App;
