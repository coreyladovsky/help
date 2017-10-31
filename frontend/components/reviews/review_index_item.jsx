import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);

  }

  handleRating() {
    let picture = ["", "one-star-review", "two-star-review", "three-star-review", "four-star-review", "five-star-review"]
  }


  render(){
    const date = dateFormat(this.props.review.created_at, 'mm/dd/yyyy');
    if(this.props.user === undefined) {
      return null;
    } else {
    return(
      <div>
        <ul>
          <ul>
            <ul className="user-info-comment">
              <li><img src={this.props.user.image} /></li>
              <li>
                {this.props.user.first_name}
              </li>
              <li>
                {this.props.user.last_name.substring(0,1) + "."}
              </li>
            </ul>
            <li>
              {this.props.user.zip_code}
            </li>
          </ul>
            <ul>
              <li>
                {this.handleRating()}
              </li>
              <li>
                {date}
              </li>

            </ul>
            {this.props.review.body}
        </ul>
      </div>
    );
  }
}
}


export default ReviewIndexItem;
