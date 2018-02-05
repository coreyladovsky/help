import React from "react";
import { Link } from "react-router-dom";
import SearchFormContainer from "../search_form_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logButton = this.logButton.bind(this);
    this.loginLink = this.loginLink.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    this.props.nextPage("/reviews");
  }

  logButton() {
    if (this.props.currentUser) {
      return (
        <button className="nav-log-out" onClick={this.props.logout}>
          Log out
        </button>
      );
    } else {
      return (
        <Link to={"/signup"} className="nav-sign-up">
          Sign Up
        </Link>
      );
    }
  }

  loginLink() {
    if (this.props.currentUser) {
      return (
        <Link className="home-nav" to={"/"}>
          Home
        </Link>
      );
    } else {
      return (
        <Link className="home-nav" to={"/login"}>
          Log In
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <header className="red-nav-bar">
            <ul className="top-nav-search">
              <li>
                <div className="help-nav-div">
                  <Link to={"/"} className="help-nav">
                    help
                  </Link>
                </div>
              </li>
              <SearchFormContainer props={this.props} />
              <li className="nav-sign-up-li">{this.logButton()}</li>
            </ul>
          </header>
          <div className="long-bar">
            <div className="dark-nav-thin">
              <ul className="thin-red-nav-bar">
                <li className="review-nav" />
                <li className="review-nav">{this.loginLink()}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
