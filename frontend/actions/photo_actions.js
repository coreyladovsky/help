import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const fetchBizPhotos = (businessId) => dispatch => (
  PhotoAPIUtil.fetchBizPhotos(businessId).then(
    photos => dispatch(receivePhotos(photos))
  )
);

export const fetchPhoto = (photoId) => dispatch => (
  PhotoAPIUtil.fetchPhoto(photoId).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const createPhoto = data => dispatch => (
  PhotoAPIUtil.createPhoto(data).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const deletePhoto = photoId => dispatch => (
  PhotoAPIUtil.deletePhoto(photoId).then(
    photo => dispatch(removePhoto(photo.id))
  )
);

export const updatePhoto = updatedPhoto => dispatch => (
  PhotoAPIUtil.updatePhoto(updatedPhoto).then(
      photo => dispatch(receivePhoto(photo))
  )
);
