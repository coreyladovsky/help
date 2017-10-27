import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {findValue: "", nearValue: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findChange = this.findChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
    this.logButton = this.logButton.bind(this);
    this.loginLink = this.loginLink.bind(this);
  }

  handleSubmit(event) {

  }

  findChange(event) {
    this.setState({findValue: event.target.value});
  }

  nearChange(event) {
    this.setState({nearValue: event.target.value});
  }

  logButton() {
    if(this.props.currentUser){
      return <button className="nav-log-out" onClick={this.props.logout}>Log out</button>;
    } else {
      return <Link to={"/signup"} className="nav-sign-up">Sign Up</Link>;
    }
  }

  loginLink() {
    if(this.props.currentUser) {
      return <Link className="home-nav" to={"/" }>Home</Link>;
    }else {
      return <Link className="home-nav" to={"/login"}>Log In</Link>;
    }
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
                  <button className="mag" onClick={this.handleSubmit}><i className="icon fa fa-search" ></i></button>

                </li>
            </ul>
            </form>
            <li className="nav-sign-up-li">
              {this.logButton()}
            </li>
        </ul>
      </header>
          <div className="long-bar">

            <div className="dark-nav-thin">

            <ul className="thin-red-nav-bar">
              <li className="review-nav">
                <Link to={'/reviews'}>Write a Review</Link>
              </li>
              <li className="review-nav">
                {this.loginLink()}
              </li>

            </ul>
          </div>
        </div>

      </div>

    );
  }
}

export default NavBar;
