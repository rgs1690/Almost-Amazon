import { getSingleAuthor, deleteAuthor } from './authorData';
import { getBooksbySingleAuthor, getSingleBook, deleteBook } from './bookData';

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
    .then((authorObj) => {
      console.warn(authorObj);
      getBooksbySingleAuthor(authorObj.firebaseKey)
        .then((bookObj) => {
          resolve({ bookObj, ...authorObj });
          console.warn(bookObj);
        });
    }).catch(reject);
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getBooksbySingleAuthor(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, viewAuthorDetails, deleteAuthorBooks };
