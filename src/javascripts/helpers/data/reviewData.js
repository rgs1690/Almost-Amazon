import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOOK REVIEW
const getReviews = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reviews.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// CREATE BOOK REVIEW
const createReview = (reviewObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/reviews.json`, reviewObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/reviews/${response.data.name}.json`, body)
        .then(() => {
          getReviews(reviewObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});
// GET SINGLE REVIEW
const getSingleReview = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reviews/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// DELETE REVIEW
const deleteReview = (uid, firebaseKey) => new Promise((resolve, reject) => {
  console.warn('in delete review promise', firebaseKey);
  axios.delete(`${dbUrl}/reviews/${firebaseKey}.json`)
    .then(() => {
      getReviews(uid).then(resolve);
    })
    .catch(reject);
});
// UPDATE Review
const updateReview = (reviewObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/reviews/${reviewObj.firebaseKey}.json`, reviewObj)
    .then(() => getReviews(reviewObj.uid).then(resolve))
    .catch(reject);
});
//  GET REVIEWS OF SINGLE BOOK
const getReviewsofSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reviews.json?orderBy="book_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getReviews,
  createReview,
  getSingleReview,
  deleteReview,
  updateReview,
  getReviewsofSingleBook
};
