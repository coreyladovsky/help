import React from "react";
import { Link } from "react-router-dom";
import SessionFormContainer from "../session/session_form_container";
import SearchFormContainer from "../search_form_container";
import BizLandingIndex from "../business/business_landing_container";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.logButton = this.logButton.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.cuisineSearch = this.cuisineSearch.bind(this);
    this.heroChange = this.heroChange.bind(this);
    this.classes = [
      "landing-background1",
      "landing-background1",
      "landing-background3",
      "landing-background4",
      "landing-background5",
      "landing-background6",
      "landing-background7",
      "landing-background8",
      "landing-background9"
    ];
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.formType !== nextprops.formType) {
      this.setState();
    }
  }

  clickHandler(event) {
    this.props.nextPage("/reviews");
  }

  componentDidMount() {
    if (this.props.intendedPage) {
      this.props.history.push(this.props.intendedPage);
      this.props.clearPage();
    } else {
      this.props.fetchBusinesses({
        cuisine: "",
        price_range: 4,
        noise_level: 4,
        delivery: false,
        bounds: "",
        name: ""
      });
    }
  }

  searchSubmit() {
    this.props.fetchBusinesses({
      cuisine: "",
      price_range: 4,
      noise_level: 4,
      delivery: false,
      bounds: "",
      name: ""
    });
    this.props.history.push("/search");
  }

  cuisineSearch(event) {
    this.props.fetchBusinesses({
      cuisine: event._targetInst.memoizedProps.value.toLowerCase(),
      price_range: 4,
      noise_level: 4,
      delivery: false,
      bounds: "",
      name: event._targetInst.memoizedProps.value.toLowerCase()
    });
    this.props.history.push("/search");
  }

  logButton() {
    if (this.props.currentUser) {
      return (
        <button className="logout-landing" onClick={this.props.logout}>
          Log out
        </button>
      );
    } else {
      return (
        <div>
          <ul className="log-links">
            <li>
              <Link to={"/login"} className="log-in-landing">
                Log In
              </Link>
            </li>
            <li>
              <Link to={"/signup"} className="sign-up-landing">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  heroChange() {
    setInterval(() => {
      $("#landing-hero").removeClass();
      let picClass = this.classes[
        Math.floor(Math.random() * this.classes.length)
      ];
      $("#landing-hero").addClass("landing-background " + picClass);
    }, 5000);
  }

  render() {
    let final =
      "landing-background " +
      this.classes[Math.floor(Math.random() * this.classes.length)];
    return (
      <div>
        <div id="landing-hero" className={final}>
          {this.heroChange()}
          <div className="landing-header">
            <ul className="landing-header-ul">
              <li />
              <li>{this.logButton()}</li>
            </ul>
          </div>
          <div className={"landing-container"}>
            <div className="landing-body">
              <div className="help-div-landing">
                <Link to={"/"} className="help-landing">
                  help
                </Link>
              </div>
              <SearchFormContainer
                path={this.props.match.path}
                props={this.props}
              />
              <div className="all-biz-landing">
                <i className="fa fa-cutlery" aria-hidden="true" />
                <button
                  onClick={this.searchSubmit}
                  className="restaurant-landing-text"
                >
                  Restaurants
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-places-landing">
          <div className="places-to-try">Help Places To Try</div>

          <BizLandingIndex />
        </div>
        <div className="cuisine-search-landing">
          <div className="places-to-try biz-browse-text">
            Browse Business By Categoy
          </div>
          <div className="cuisine-landing-container">
            <ul className="cuisine-landing-ul" onClick={this.cuisineSearch}>
              <li value="Coffee">
                <div className="cuisine-pic coffee" value="Coffee" />
                Coffee
              </li>
              <li value="Bar">
                <div className="cuisine-pic beer" value="Bar" />
                Bars
              </li>
              <li value="Dessert">
                <div className="cuisine-pic dessert" value="Dessert" />
                Desserts
              </li>
              <li value="Diner">
                <div className="cuisine-pic diner" value="Diner" />
                Diners
              </li>
              <li value="French">
                <div className="cuisine-pic french" value="French" />
                French
              </li>
              <li value="Pizza">
                <div className="cuisine-pic pizza" value="Pizza" />
                Pizza
              </li>
              <li value="Steakhouse">
                <div className="cuisine-pic steak" value="Steakhouse" />
                Steakhouses
              </li>
              <li value="Italian">
                <div className="cuisine-pic italy" value="Italian" />
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
