import React from "react";
import NavBar from "../NavBar/NavBar";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reviews === undefined) {
      return null;
    } else {
      const reviews = this.props.reviews.map(review => {
        return (
          <ReviewIndexItem
            key={review.id}
            deleteReview={this.props.deleteReview}
            bizId={this.props.businessId}
            currentUser={this.props.currentUser}
            review={review}
            fetchReviewers={this.props.fetchReviewers}
            user={this.props.reviewers[review.user_id]}
          />
        );
      });

      return (
        <div>
          <ul className="review-items-ul">{reviews}</ul>
        </div>
      );
    }
  }
}

export default ReviewIndex;
