import React from 'react';
import NavBar from '../NavBar';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render(){
    if(this.props.reviews === undefined) {
      return null;
    } else {
    const reviews = this.props.reviews.map((review) => {
      return <ReviewIndexItem key={review.id} review={review} fetchReviewers={this.props.fetchReviewers} user={this.props.reviewers[review.user_id]}/>;
    });

    return(
      <div>
        <ul className="review-items-ul">
          {reviews}
        </ul>
      </div>
    );}
  }

}

export default ReviewIndex;