import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {

  render() { 
    if(this.props.currentUser) {
      return (
        <div>
          <h1>Greetings {this.props.currentUser}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to={'/signup'}>Sign Up</Link>
          <br/>
          <Link to={'/login'}>Log In</Link>
        </div>
      );
    }
  }




}

export default Landing;
