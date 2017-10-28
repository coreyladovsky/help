import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";

class ReviewsContainer extends React.Component {


  render(){
    return(
      <div>
        <NavBar />

        <Link to={'/'} className="help-landing">Click Me To Go HOME</Link></div>
    );
  }
}


export default ReviewsContainer;
