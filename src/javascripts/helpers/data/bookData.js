import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, { firebaseKey })
        .then(() => {
          getBooks().then((allBooks) => resolve(allBooks));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOOK
// SEARCH BOOKS

export { getBooks, createBook };
