import * as ReviewAPIUtil from "../util/review_api_util";
import { receiveErrors, RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const fetchReviews = businessId => dispatch =>
  ReviewAPIUtil.fetchReviews(businessId).then(reviews =>
    dispatch(receiveReviews(reviews))
  );

export const fetchReview = reviewId => dispatch =>
  ReviewAPIUtil.fetchReview(reviewId).then(review =>
    dispatch(receiveReview(review))
  );

export const createReview = review => dispatch =>
  ReviewAPIUtil.createReview(review).then(
    rev => dispatch(receiveReview(rev)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const updateReview = reviewId => dispatch =>
  ReviewAPIUtil.updateReview(reviewId).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const deleteReview = reviewId => dispatch =>
  ReviewAPIUtil.deleteReview(reviewId).then(review =>
    dispatch(removeReview(review.id))
  );
