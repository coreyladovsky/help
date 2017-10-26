import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.logButton = this.logButton.bind(this);
  }

  logButton() {

    if(this.props.currentUser){
      return <button onClick={this.props.logout}>Log out</button>;
    } else {
      return (
        <div >

            <ul className="log-links">
              <li>
              <Link to={"/login"} className="log-in-landing">Log In</Link>
              </li>
              <li>
                <Link to={"/signup"} className="sign-up-landing">Sign Up</Link>
              </li>
            </ul>

        </div>
        );
    }
  }

  render() {

    return (
      <div className="landing-background">
        <header className="landing-header">
          <ul className="landing-header-ul">
            <li>
              <Link to={"/review"} className="review-link">Write a Review</Link>
            </li>
            <li>
                {this.logButton()}
            </li>
          </ul>
        </header>


      </div>
    );
  }




}

export default Landing;
