
export const fetchReviews = () => (
  $.ajax({
    method: "GET",
    url: "api/businesses/reviews",
  })
);

export const fetchReview = (reviewId) => (
  $.ajax({
    method: "GET",
    url: `api/businesses/:businessId/${reviewId}`,
  })
);


export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: 'api/business/:businessId/reviews',
    data: { review }
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `api/business/:businessId/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    method: "DELETE",
    url: `api/business/:businessId/reviews/${reviewId}`
  })
);
