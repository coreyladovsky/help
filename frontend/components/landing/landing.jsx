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
        <div>
          <ul className="log-links">
            <li>
            <Link to={"/login"}>Log In</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>

          </ul>
        </div>
        );
    }
  }

  render() {

    return (
      <div>
        <Link to={"/review"}>Write a Review</Link>
        "This Is Helps landing page. Take a search and see if you can't find somewhere good to eat!"
        {this.logButton()}
      </div>
    );
  }




}

export default Landing;
