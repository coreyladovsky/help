import React from 'react';
import { Link } from 'react-router-dom';


class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render(){

    return(
      <div>
        <ul>
          <ul className="user-info-comment">
            <li>
              {this.props.user ? this.props.user.first_name : ""}
            </li>
          </ul>

        </ul>
        {this.props.review.created_at}
        {this.props.review.body}
      </div>
    );
  }
}


export default ReviewIndexItem;
