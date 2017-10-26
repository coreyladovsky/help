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
      return <button className="logout-landing" onClick={this.props.logout}>Log out</button>;
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
        <body className="landing-body">
          <div className="help-div-landing">
            <Link to={'/'} className="help-landing">help</Link>
          </div>

        </body>
        <footer>
          <Link className="git-link" to={"https://github.com/coreyladovsky"}>Corey Ladovsky</Link>
        </footer>

      </div>
    );
  }




}

export default Landing;
