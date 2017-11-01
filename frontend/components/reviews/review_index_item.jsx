import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);

  }

  handleRating() {
    let picture = ["", "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/small-ratings/one_star_review.png", "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/small-ratings/two_star_review.png", "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/small-ratings/three_star_review.png", "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/small-ratings/four_star_review.png", "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/small-ratings/five_star_review.png"];
    let rating = this.props.review.rating;
    let pic =  picture[rating];
    return <img className="user-review-rating" src={pic}/>;
  }


  render(){
    const date = dateFormat(this.props.review.created_at, 'mm/dd/yyyy');
    if(this.props.user === undefined) {
      return null;
    } else {
    return(
      <div>
        <ul className="review-container-comment">
          <li>

          <ul>
            <li>

            <ul className="user-info-comment">
              <li className="user-profile-pic-comment-li"><img className="user-profile-pic-comment" src={this.props.user.image} /></li>
              <li className="user-profile-name-comment">
                {this.props.user.first_name}
              </li>
              <li className="user-profile-name-comment">
                {this.props.user.last_name.substring(0,1) + "."}
              </li>
            </ul>
          </li>
            <li className="zip-code-comment">
              {this.props.user.zip_code}
            </li>
          </ul>
        </li>
        <li className="review-info-comment-show">

          <ul className="review-info-comment">
            <ul className="review-stars-and-date">
              <li className="review-stars-comments">
                {this.handleRating()}
              </li>
              <li className="review-date-comments">
                {date}
              </li>

            </ul>
            <li className="review-body-comment">
            {this.props.review.body}
            </li>
          </ul>
        </li>
        </ul>
      </div>
    );
  }
}
}


export default ReviewIndexItem;
