import * as BusinessAPIUtil from '../util/business_api_util';


export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_REVIEWERS = "RECEIVE_USERS";


export const receiveReviewers = (reviewers) => ({
  type: RECEIVE_REVIEWERS,
  reviewers
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusiness = business => {

  return ({
  type: RECEIVE_BUSINESS,
  business
});};

export const fetchBusinesses = (filters) => dispatch => (
  BusinessAPIUtil.fetchBusinesses(filters).then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = (businessId) => dispatch => (
  BusinessAPIUtil.fetchBusiness(businessId).then(business => dispatch(receiveBusiness(business)))
);

export const fetchReviewers = (businessId) => dispatch => (
  BusinessAPIUtil.fetchReviewers(businessId).then(reviewers => dispatch(receiveReviewers(reviewers)))
);
