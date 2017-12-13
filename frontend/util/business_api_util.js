
export const fetchBusinesses = data => {
    return $.ajax({
    method: "GET",
    url: "api/businesses",
    data: {business: data}
  });
};

export const fetchBusiness = (businessId) => (
  $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}`,
  })
);

export const createBusiness = (data) => (
  $.ajax({
    method: "POST",
    url: 'api/business',
    data: { data }
  })
);

export const fetchReviewers = (businessId) => (
  $.ajax({
    method: "GET",
    url: 'api/businesses/' + businessId + '/reviewers'
  })
);
