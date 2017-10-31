import React from 'react';
import { Link } from 'react-router-dom';


class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <ul>
          <ul className="user-info-comment">
            <li>
              {this.props}
            </li>
          </ul>

        </ul>
        {this.props.review.created_at}
        {this.props.review.body}
      </div>
    );
  }
}


export default ReviewsContainer;
