import { createBook } from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { createAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
// import { createReview } from '../helpers/data/reviewData';
// import { showReviews } from '../components/reviews';

const formEvents = (uid) => {
// CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        description: document.querySelector('#description').value,
        author_id: document.querySelector('#author_id').value,
        uid
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorObj = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        favorite: document.querySelector('#favorite').checked,
        uid
      };
      createAuthor(authorObj).then(showAuthors);
    }
    // // SUBMIT REVIEW
    // if (e.target.id.includes('submit-review')) {
    //   e.preventDefault();
    //   console.warn('clicked submit review', e.target.id);
    //   // const [, firebaseKey] = e.target.id.split('--');
    //   const reviewObj = {
    //     reviewer_name: document.querySelector('#reviewerName').value,
    //     review_message: document.querySelector('#reviewMessage').value,
    //     // firebaseKey,
    //     book_id: document.querySelector('#book_id').value,
    //     uid
    //   };
    //   createReview(reviewObj).then(showReviews);
    // }
  });
};

export default formEvents;
