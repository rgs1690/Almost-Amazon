import { getSingleAuthor, deleteAuthor } from './authorData';
import { getBooksbySingleAuthor, getSingleBook, deleteBook } from './bookData';
import { getSingleReview } from './reviewData';

const viewBookDetails = (bookfirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookfirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});
const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObject) => {
      console.warn(authorObject);
      getBooksbySingleAuthor(authorObject.firebaseKey)
        .then((bookObj) => {
          resolve({ bookObj, ...authorObject });
          console.warn(bookObj);
        });
    }).catch(reject);
});

const viewReviewDetails = (reviewfirebaseKey) => new Promise((resolve, reject) => {
  getSingleReview(reviewfirebaseKey)
    .then((reviewObject) => {
      console.warn(reviewObject);
      getSingleBook(reviewObject.book_id)
        .then((bookObj) => {
          resolve({ bookObj, ...reviewObject });
        });
    }).catch(reject);
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getBooksbySingleAuthor(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorBooks,
  viewReviewDetails
};
