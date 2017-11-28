export const fetchPhoto = (photoId) => (
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}`,
  })
);



export const fetchPhotos = (businessId) => (
  $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/photos`,
  })
);
