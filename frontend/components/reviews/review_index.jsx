import React from 'react';
import NavBar from '../NavBar';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }


  render(){
    const reviews = this.props.business.reviews.map((review) => {
      return <ReviewIndexItem key={review.id} review={review} />;
    });

    return(
      <div>
        <ul className="review-items-ul">
          {reviews}
        </ul>
      </div>
    );
  }

}

export default ReviewIndex;
