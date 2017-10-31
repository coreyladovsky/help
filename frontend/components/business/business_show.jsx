import React from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import ReviewsContainer from '../reviews/reviews_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.hours = this.hours.bind(this);
    this.ampm = this.ampm.bind(this);
    this.hour = this.hour.bind(this);
    this.min = this.min.bind(this);
  }

  handleClick(event) {
    this.props.nextPage(`${this.props.location.pathname}/reviews/new`);
  }

  clickHandler(event) {
    this.props.nextPage(`${this.props.location.pathname}/photos/new`);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  ampm(time) {
    let ampm;
    if(time >= 24) {
      ampm = "am";
    }else if(time > 12) {
      ampm = "pm";
    } else {
      ampm = "am";
    }
    return ampm;
  }

  hour(time) {
    let hour;
    if(time === 12 || time === 24){
       hour = 12;
    } else {
       hour = Math.floor(time % 12);
    }
    return hour;
  }

  min(time) {
    let min;
    if((time + "").includes(".")){
      min = parseInt(`${time}`.split(".")[1]);

    } else {
      min = 0 ;
    }
    return min;
  }


  hours(start_time, end_time) {
    if(start_time == 0 && end_time === 0) {
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

    if(start_min < 10) {
      start_min = "0" + start_min;
    }
    if(end_min < 10) {
      end_min = "0" + end_min;
    }
    return `${start_hour}:${start_min} ${start_ampm} - ${end_hour}:${end_min} ${end_ampm}`;

  }

  render() {
    if(this.props.business === undefined) {
      return null;
    } else {
    return(
      <div>
          <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>

          <div className="main-div">

          <ul className="biz-show-head">
            <ul>
              <li className="biz-name-main">
                {this.props.business.name}
              </li>
              <li>
                <ul className="rating-review-show">
                  <li className="star-rating-show">
                    stars
                  </li>
                  <li className="review-number-show">
                    #
                  </li>
                  <li className="review-text-show">
                    reviews
                  </li>
                </ul>
                <ul className="price-cuisine-show">
                  <li className="price-show">
                    dollar signs
                  </li>
                  <li ><div className="period-container"><div className="period">·</div></div> </li>
                  <li className="cusine-link-show">
                    <Link to={'/search'}>
                      {this.props.business.cuisine}
                    </Link>
                  </li>
                </ul>

                <ul>
                  <div className="map-show">
                    Map Box
                  </div>
                </ul>
              </li>
            </ul>
            <ul>

            <ul className="add-buttons-show">
              <li className="review-button-button-show">
                <Link to={'/reviews'} onClick={this.handleClick} className="review-button-show"><i className="fa fa-star" aria-hidden="true"></i> Write a Review</Link>
              </li>
              <li className="add-photo-sho">
                <Link to={'/photos'} className="photo-button-show" onClick={this.clickHandler}><i className="fa fa-camera" aria-hidden="true"></i>Add Photo</Link>
              </li>
            </ul>
            <div>
              <ul className="picture-list-show">
                <li className="first-photo-show">
                  <Link to={"/business/photos"}>Picture 1</Link>
                </li>
                <li className="second-photo-show">
                  <Link to={"/business/photos"}>Picture 2</Link>
                </li>
                <li className="third-photo-show">
                  <Link to={"/business/photos"}>See all photos</Link>
                </li>
              </ul>
            </div>
          </ul>
          </ul>




          <div className="biz-show-head">
            <div className="biz-show-reviews">
              Reviews
              <ul>
                <ReviewsContainer businessId={this.props.business.id}/>
              </ul>
            </div>
            <div className="all-hours-show">

            <div className="hours-div-show">Hours</div>
            <ul className="hour-container-show">
              <ul className="hours-open-show">
                <li className="week-day">
                  Mon
                </li>

                <li className="week-day">
                  Tue
                </li>
                <li className="week-day">
                  Wed
                </li>
                <li className="week-day">
                  Thu
                </li>
                <li className="week-day">
                  Fri
                </li>
                <li className="week-day">
                  Sat
                </li>
                <li className="week-day">
                  Sun
                </li>
              </ul>
              <ul>
                <li>
                  <div>{this.hours(this.props.business.mon_start_time, this.props.business.mon_end_time)}</div>
                </li>
                <li>
                  <div>{this.hours(this.props.business.tue_start_time, this.props.business.tue_end_time)}</div>
                </li>

                <li>
                  <div>{this.hours(this.props.business.wed_start_time, this.props.business.wed_end_time)}</div>
                </li>

                <li>
                  <div>{this.hours(this.props.business.thur_start_time, this.props.business.thur_end_time)}</div>
                </li>

                <li>
                  <div>{this.hours(this.props.business.fri_start_time, this.props.business.fri_end_time)}</div>
                </li>

                <li>
                  <div>{this.hours(this.props.business.sat_start_time, this.props.business.sat_end_time)}</div>
                </li>


                <li>
                  <div>{this.hours(this.props.business.sun_start_time, this.props.business.sun_end_time)}</div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        </div>

      </div>

    );}
  }
}

export default BusinessShow;
