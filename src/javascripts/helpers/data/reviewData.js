import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOOK REVIEW
const getReviews = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reviews.json`)
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
          getReviews().then(resolve);
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
const deleteReview = (firebaseKey) => new Promise((resolve, reject) => {
  console.warn('in delete review promise', firebaseKey);
  axios.delete(`${dbUrl}/reviews/${firebaseKey}.json`)
    .then(() => {
      getReviews().then(resolve);
    })
    .catch(reject);
});

export {
  getReviews,
  createReview,
  getSingleReview,
  deleteReview
};
