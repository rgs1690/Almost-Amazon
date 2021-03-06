import { getSingleAuthor, deleteAuthor } from './authorData';
import { getBooksbySingleAuthor, getSingleBook, deleteBook } from './bookData';
import { deleteReview, getReviewsofSingleBook, getSingleReview } from './reviewData';

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

const deleteAuthorBooks = (uid, authorId) => new Promise((resolve, reject) => {
  getBooksbySingleAuthor(authorId).then((authorsBookArray) => {
    console.warn(authorId, authorsBookArray);
    const deleteBooks = authorsBookArray.map(((book) => deleteBook(uid, book.firebaseKey)));

    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(uid, authorId)));
  }).catch(reject);
});

const deleteBookReviews = (uid, bookId) => new Promise((resolve, reject) => {
  getReviewsofSingleBook(bookId).then((booksReviewArray) => {
    const deleteReviews = booksReviewArray.map((review) => deleteReview(uid, review.firebaseKey));

    Promise.all(deleteReviews).then(() => resolve(deleteBook(uid, bookId)));
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorBooks,
  viewReviewDetails,
  deleteBookReviews
};
