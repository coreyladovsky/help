import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';
import SearchFormContainer from "../search_form_container";
import BizLandingIndex from "../business/business_landing_container";

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.logButton = this.logButton.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if(this.props.formType !== nextprops.formType){
      this.setState();
    }
  }

  clickHandler(event) {
    this.props.nextPage("/reviews");
  }

  componentDidMount() {
    if(this.props.intendedPage) {
      this.props.history.push(this.props.intendedPage);
      this.props.clearPage();
    } else {
      this.props.fetchBusinesses({cuisine: "",
            price_range: 4,
            noise_level: 4,
            delivery: false,
            bounds: "",
            name: ""});
    }
  }

  searchSubmit() {
    this.props.fetchBusinesses({cuisine: "",
      price_range: 4,
      noise_level: 4,
      delivery: false,
      bounds: "",
      name: ""});
    this.props.history.push("/search");

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

  //
  // <footer>
  // <a className="git-link" href="https://github.com/coreyladovsky">Corey Ladovsky</a>
  // </footer>

  // <button onClick={this.searchSubmit} className="log-in-landing">
  //   Restaurants
  // </button>
  render() {
    const classes = ["landing-background1", "landing-background1", "landing-background3", "landing-background4",
  "landing-background5", "landing-background6", "landing-background7", "landing-background8", "landing-background9"];
     let picClass = classes[Math.floor(Math.random() * classes.length)];
     let final = "landing-background " + picClass;
    return (
      <div >
        <div className={final}>
        <div className="landing-header">
          <ul className="landing-header-ul">
            <li>
            </li>
            <li>{this.logButton()}</li>
          </ul>
        </div>
        <body className={"landing-container"}>
        <div className="landing-body">
          <div className="help-div-landing">
            <Link to={'/'} className="help-landing">help</Link>
          </div>
            <SearchFormContainer path={this.props.match.path} props={this.props} />
            <div className="all-biz-landing">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
                <button onClick={this.searchSubmit} className="restaurant-landing-text">
                  Restaurants
                </button>
            </div>
        </div>

      </body>
      </div>
        <div className="additional-places-landing">
          <div className="places-to-try">
            Help Places To Try
          </div>



          <BizLandingIndex/>


        </div>
        <div className="cuisine-search-landing">
          <div className="places-to-try biz-browse-text">
            Browse Business By Categoy
          </div>
          <div className="cuisine-landing-container">
            <ul className="cuisine-landing-ul">
              <li>
                <div className="cuisine-pic coffee">
                </div>
                Coffee
              </li>
              <li>
                <div className="cuisine-pic beer">
                </div>
                Bars
              </li>
              <li>
                <div className="cuisine-pic dessert">
                </div>
                Desserts
              </li>
              <li>
                <div className="cuisine-pic diner">
                </div>
                Diners
              </li>
              <li>
                <div className="cuisine-pic french">
                </div>
                French
              </li>
              <li>
                <div className="cuisine-pic pizza">
                </div>
                Pizza
              </li>
              <li>
                <div className="cuisine-pic steak">
                </div>
                Steakhouses
              </li>
              <li>
                <div className="cuisine-pic italy">
                </div>
                Italian
              </li>
            </ul>
        </div>
      </div>

    </div>
    );
  }




}

export default Landing;
