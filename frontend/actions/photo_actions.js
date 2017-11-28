import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhotos = (businessId) => dispatch => (
  PhotoAPIUtil.fetchPhotos(businessId).then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (photoId) => dispatch => (
  PhotoAPIUtil.fetchPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
);
