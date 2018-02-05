export const fetchPhoto = photoId =>
  $.ajax({
    method: "GET",
    url: `api/photos/${photoId}`
  });

export const fetchBizPhotos = businessId =>
  $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/photos`
  });

export const deletePhoto = photoId =>
  $.ajax({
    method: "DELETE",
    url: `api/photos/${photoId}`
  });

export const updatePhoto = photo =>
  $.ajax({
    method: "PATCH",
    url: `api/photos/${photo.id}`,
    data: { photo }
  });

export const createPhoto = formData =>
  $.ajax({
    method: "POST",
    url: "api/photos",
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData
  });
