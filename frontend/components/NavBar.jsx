import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {findValue: "", nearValue: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findChange = this.findChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
  }

  handleSubmit(event) {

  }

  findChange(event) {
    this.setState({findValue: event.target.value});
  }

  nearChange(event) {
    this.setState({nearValue: event.target.value});
  }

  render() {
    return(
      <div className="container">
        <header className="red-nav-bar">
        <ul className="top-nav-search">
          <li>
              <div className="help-nav-div">
                <Link to={'/'} className="help-nav">help</Link>
              </div>
          </li>
          <form >
            <ul className="search-form-nav">

                <li className="find-text-nav">
                  Find
                </li>
                <li className="find-input-field">
                  <input className="nav-input-find" onChange={this.findChange} value={this.state.findValue} text="type" placeholder="Restaurnts"/>
                </li>
              <li className="seperator"><div className="seperator-div"></div></li>
                <li className="near-text-nav"> Near</li>
                <li>
                  <input  className="near-input-nav" onChange={this.nearChange} value={this.state.nearValue} text="type" placeholder="Current Location" />
                </li>
                <li>
                  <button className="mag" onClick={this.handleSubmit}>Mag</button>
                </li>
            </ul>
            </form>
            <li className="nav-sign-up-li">
              <Link to={"/signup"} className="nav-sign-up">Sign Up</Link>
            </li>
        </ul>
      </header>
          <div className="long-bar">

            <div className="dark-nav-thin">

            <ul className="thin-red-nav-bar">
              <li className="review-nav">
                <Link to={'/reviews'}>Write a Review</Link>
              </li>
              <li className="log-in-nav">
                <Link to={"/login"}>Log In</Link>
              </li>

            </ul>
          </div>
        </div>

      </div>

    );
  }
}

export default NavBar;
