import React from 'react';
import LandingContainer from './landing/landing_container';
import SessionFormContainer from './session/session_form_container';
import SearchContainer from './business/search_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ReviewsContainer from './reviews/reviews_container';
import ReviewFormContainer from './reviews/review_form_container';
import BusinessShowContainer from './business/business_show_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotosContainer from './photos/photos_container';



const App = () => (
  <div>

    <header>
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer}/>
      <ProtectedRoute path="/businesses/:businessId/reviews/new" component={ReviewFormContainer}/>
      <ProtectedRoute path="/businesses/:businessId/reviews/:reviewId/edit" component={ReviewFormContainer}/>
      <ProtectedRoute path="/reviews" component={ReviewsContainer}/>
      <ProtectedRoute exact path="/businesses/:businessId/reviews" component={ReviewsContainer}/>
      <ProtectedRoute path="/businesses/:businessId/photos/new" component={PhotoUploadContainer}/>
      <Route path="/businesses/:businessId/photos" component={PhotosContainer}/>
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer}/>
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/" component={LandingContainer} />

    </Switch>
  </div>
);

export default App;
