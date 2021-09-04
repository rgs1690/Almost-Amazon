import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (firebaseKey, uid) => new Promise((resolve, reject) => {
  console.warn('in delte author promise', firebaseKey);
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors(uid).then(resolve);
    })
    .catch(reject);
});
// CREATE AUTHOR
const createAuthor = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(authorObject.uid).then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});
// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// UPDATE AUTHOR
const updateAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors(authorObj.uid).then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS
// FILTER FAVORITE AUTHORS
const faveAuthors = (uid) => new Promise((resolve, reject) => {
  getAuthors(uid)
    .then((userAuthors) => {
      const favoriteAuthors = userAuthors.filter((author) => author.favorite);
      resolve(favoriteAuthors);
    }).catch(reject);
});

export {
  getAuthors,
  createAuthor,
  faveAuthors,
  deleteAuthor,
  updateAuthor,
  getSingleAuthor,
};
