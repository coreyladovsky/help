import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import SearchForm from "../search_form";

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.logButton = this.logButton.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if(this.props.formType !== nextprops.formType){
      this.setState();
    }
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
    const classes = ["landing-background1", "landing-background1", "landing-background3", "landing-background4",
  "landing-background5", "landing-background6", "landing-background7", "landing-background8", "landing-background9"];
     let picClass = classes[Math.floor(Math.random() * classes.length)];
     let final = "landing-background " + picClass;
    return (
      <main className={final}>
        <header className="landing-header">
          <ul className="landing-header-ul">
            <li>
              <Link to={"/reviews"} className="review-link">Write a Review</Link>
            </li>
            <li>
                {this.logButton()}
            </li>
          </ul>
        </header>
        <section className="landing-body">
          <div className="help-div-landing">
            <Link to={'/'} className="help-landing">help</Link>
          </div>
            <SearchForm path={this.props.match.path} />
        </section>
        <footer>
        <a className="git-link" href="https://github.com/coreyladovsky">Corey Ladovsky</a>
        </footer>

      </main>
    );
  }




}

export default Landing;
