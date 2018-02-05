import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import ReviewsContainer from "../reviews/reviews_container";
import BizShowMap from "./biz_show_map";
import PhotosContainer from "../photos/photos_container";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.hours = this.hours.bind(this);
    this.ampm = this.ampm.bind(this);
    this.hour = this.hour.bind(this);
    this.min = this.min.bind(this);
    this.findRating = this.findRating.bind(this);
    this.priceRange = this.priceRange.bind(this);
    this.noiseLevel = this.noiseLevel.bind(this);
    this.delivery = this.delivery.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  delivery(arg) {
    if (arg === undefined) {
      return "Unsure";
    } else if (arg === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  noiseLevel(avg) {
    switch (avg) {
      case 1:
        return "Quiet";
      case 2:
        return "Average";
      case 3:
        return "Loud";
      case 4:
        return "Very Loud";
      default:
        return "Not Sure";
    }
  }

  priceRange(avg) {
    switch (avg) {
      case 1:
        return "$";
      case 2:
        return "$$";
      case 3:
        return "$$$";
      case 4:
        return "$$$$";
      default:
        return <div className="price-range-undefined">Prices Unknown</div>;
    }
  }

  findRating(rating) {
    switch (rating) {
      case 5:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/5-star.png"
            }
          />
        );
      case 4.5:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/4_5_star.png"
            }
          />
        );
      case 4:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/4_star.png"
            }
          />
        );
      case 3.5:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/3_5_star.png"
            }
          />
        );
      case 3:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/3_star.png"
            }
          />
        );
      case 2.5:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/2_5_star.png"
            }
          />
        );
      case 2:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/2_star.png"
            }
          />
        );
      case 1.5:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/1_5_star.png"
            }
          />
        );
      case 1:
        return (
          <img
            src={
              "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/large-ratings/1_star.png"
            }
          />
        );
      default:
        return (
          <div className="review-div-show">
            <Link
              to={this.props.location.pathname + "/reviews/new"}
              onClick={this.handleClick}
              className="write-review-show-page-link"
            >
              {" "}
              Write The First Review!
            </Link>
          </div>
        );
    }
  }

  handleClick(event) {
    this.props.nextPage(`${this.props.location.pathname}/reviews/new`);
  }

  clickHandler(event) {
    this.props.nextPage(`${this.props.location.pathname}/photos/new`);
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.match.params.businessId !== this.props.match.params.businessId
    ) {
      this.props.fetchBusiness(newProps.match.params.businessId);
      this.props.fetchReviewers(newProps.match.params.businessId);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviewers(this.props.match.params.businessId);
    this.props.clearPage();
  }

  ampm(time) {
    let ampm;
    if (time >= 24) {
      ampm = "am";
    } else if (time > 12) {
      ampm = "pm";
    } else {
      ampm = "am";
    }
    return ampm;
  }

  hour(time) {
    let hour;
    if (time === 12 || time === 24) {
      hour = 12;
    } else {
      hour = Math.floor(time % 12);
    }
    return hour;
  }

  min(time) {
    let min;
    if ((time + "").includes(".")) {
      min = parseInt(`${time}`.split(".")[1]);
    } else {
      min = 0;
    }
    return min;
  }

  hours(start_time, end_time) {
    if (start_time == 0 && end_time === 0) {
      return "closed";
    } else if (start_time === 0 && end_time === 24) {
      return `12:00 am - 12:00 am`;
    }
    let start_ampm = this.ampm(start_time);
    let end_ampm = this.ampm(end_time);
    let start_hour = this.hour(start_time);
    let end_hour = this.hour(end_time);

    let start_min = this.min(start_time);
    let end_min = this.min(end_time);

    if (start_min < 10) {
      start_min = "0" + start_min;
    }
    if (end_min < 10) {
      end_min = "0" + end_min;
    }
    return `${start_hour}:${start_min} ${start_ampm} - ${end_hour}:${end_min} ${end_ampm}`;
  }

  searchSubmit() {
    this.props.fetchBusinesses({
      cuisine: this.props.business.cuisine.toLowerCase(),
      price_range: 4,
      noise_level: 4,
      delivery: false,
      bounds: "",
      name: this.props.business.cuisine.toLowerCase()
    });
    this.props.history.push("/search");
  }

  render() {
    if (this.props.business === undefined) {
      return null;
    } else {
      return (
        <div>
          <NavBar
            currentUser={this.props.currentUser}
            intendedPage={this.props.intendedPage}
            logout={this.props.logout}
            nextPage={this.props.nextPage}
            clearPage={this.props.clearPage}
          />

          <div className="main-div">
            <ul className="biz-show-head">
              <ul>
                <li className="biz-name-main">{this.props.business.name}</li>
                <li>
                  <ul className="rating-review-show">
                    <li className="star-rating-show">
                      {this.findRating(this.props.business.average_rating)}
                    </li>
                    <li className="review-number-show">
                      {this.props.business.review_count}
                    </li>
                    <li className="review-text-show">
                      {this.props.business.review_count === 1
                        ? "   review"
                        : "   reviews"}
                    </li>
                  </ul>
                  <ul className="price-cuisine-show">
                    <li className="price-show">
                      {this.priceRange(this.props.business.price_range)}
                    </li>
                    <li>
                      <div className="period-container">
                        <div className="period">·</div>
                      </div>{" "}
                    </li>
                    <li className="cusine-link-show">
                      <button onClick={this.searchSubmit}>
                        {this.props.business.cuisine}
                      </button>
                    </li>
                  </ul>

                  <ul>
                    <div className="map-show">
                      <BizShowMap business={this.props.business} />
                      <div className="biz-address-show">
                        {this.props.business.address}
                      </div>
                      <div className="biz-address-show">
                        {this.props.business.phone_number}
                      </div>
                      <div className="website-link">
                        {this.props.business.website}
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
              <ul>
                <ul className="add-buttons-show">
                  <li className="review-button-button-show">
                    <Link
                      to={this.props.location.pathname + "/reviews/new"}
                      onClick={this.handleClick}
                      className="review-button-show"
                    >
                      <i className="fa fa-star fake-star" aria-hidden="true" />{" "}
                      Write a Review
                    </Link>
                  </li>
                  <li className="add-photo-show">
                    <Link
                      to={this.props.location.pathname + "/photos/new"}
                      className="photo-button-show"
                      onClick={this.clickHandler}
                    >
                      <i className="fa fa-camera" aria-hidden="true" />Add Photo
                    </Link>
                  </li>
                </ul>
                <div>
                  <PhotosContainer
                    businessId={this.props.business.id}
                    photos={this.props.business.photos}
                  />

                  <Link to={`/businesses/${this.props.business.id}/photos`}>
                    <ul className="see-all-photos">
                      <i className="fa fa-th-large" aria-hidden="true" />
                      <div className="see-all-text">
                        See all{" "}
                        {this.props.business.photos
                          ? this.props.business.photos.length
                          : ""}
                      </div>
                    </ul>
                  </Link>
                </div>
              </ul>
            </ul>

            <div className="biz-show-head">
              <div className="biz-show-reviews">
                <div className="biz-show-reviews-text">Reviews</div>
                <ul>
                  <ReviewsContainer
                    businessId={this.props.business.id}
                    reviewers={this.props.reviewers}
                  />
                </ul>
              </div>
              <div className="all-hours-show">
                <div className="hours-div-show">Hours</div>
                <ul className="hour-container-show">
                  <ul className="hours-open-show">
                    <li className="week-day">Mon</li>

                    <li className="week-day">Tue</li>
                    <li className="week-day">Wed</li>
                    <li className="week-day">Thu</li>
                    <li className="week-day">Fri</li>
                    <li className="week-day">Sat</li>
                    <li className="week-day">Sun</li>
                  </ul>
                  <ul>
                    <li>
                      <div>
                        {this.hours(
                          this.props.business.mon_start_time,
                          this.props.business.mon_end_time
                        )}
                      </div>
                    </li>
                    <li>
                      <div>
                        {this.hours(
                          this.props.business.tue_start_time,
                          this.props.business.tue_end_time
                        )}
                      </div>
                    </li>

                    <li>
                      <div>
                        {this.hours(
                          this.props.business.wed_start_time,
                          this.props.business.wed_end_time
                        )}
                      </div>
                    </li>

                    <li>
                      <div>
                        {this.hours(
                          this.props.business.thur_start_time,
                          this.props.business.thur_end_time
                        )}
                      </div>
                    </li>

                    <li>
                      <div>
                        {this.hours(
                          this.props.business.fri_start_time,
                          this.props.business.fri_end_time
                        )}
                      </div>
                    </li>

                    <li>
                      <div>
                        {this.hours(
                          this.props.business.sat_start_time,
                          this.props.business.sat_end_time
                        )}
                      </div>
                    </li>

                    <li>
                      <div>
                        {this.hours(
                          this.props.business.sun_start_time,
                          this.props.business.sun_end_time
                        )}
                      </div>
                    </li>
                  </ul>
                </ul>

                <ul>
                  <div className="more-info-div">
                    <div className="hours-div-show">More business info</div>
                    <ul className="addition-info-show">
                      <ul className="noise-level-info-show">
                        <li className="info-col-show">Noise Level</li>
                        <li className="info-col-ans-show">
                          {this.noiseLevel(this.props.business.noise_level)}
                        </li>
                      </ul>
                      <ul className="delivery-info-show">
                        <li className="info-col-show"> Delivery </li>
                        <li className="info-col-ans-show">
                          {this.delivery(this.props.business.delivery)}
                        </li>
                      </ul>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <ul />
        </div>
      );
    }
  }
}

export default BusinessShow;
