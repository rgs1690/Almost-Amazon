import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import {
  // deleteBook,
  getSingleBook,
  updateBook,
} from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { updateAuthor, getSingleAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import {
  viewBookDetails,
  viewAuthorDetails,
  viewReviewDetails,
  deleteAuthorBooks,
  deleteBookReviews
} from '../helpers/data/mergedData';
import addReviewForm from '../components/forms/addReviewForm';
import {
  createReview,
  deleteReview,
  getSingleReview,
  updateReview,
} from '../helpers/data/reviewData';
import viewReview from '../components/viewReviews';
import { showReviews } from '../components/reviews';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');
        // console.warn(id);
        deleteBookReviews(id).then(showBooks);
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }
    // CLICK EVENT FOR  EDITING/ UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      const [, id] = e.target.id.split('--');
      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
        description: document.querySelector('#description').value,
        firebaseKey
      };
      updateBook(bookObject).then(showBooks);
    }
    // EVENT FOR VIEW BOOK BTN
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewBookDetails(firebaseKey).then(viewBook);
    }
    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE AUTHOR', e.target.id);
        const [, id] = e.target.id.split('--');
        console.warn(id);
        deleteAuthorBooks(id).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // CLICK EVENT FOR  EDITING/ UPDATING AN AUTHOR
    if (e.target.id.includes('edit-author-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      const [, id] = e.target.id.split('--');
      getSingleAuthor(id).then((authorObj) => addAuthorForm(authorObj));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        email: document.querySelector('#email').value,
        image: document.querySelector('#author_image').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        favorite: document.querySelector('#favorite').checked,
        description: document.querySelector('#descriptionAuthor').value,
        firebaseKey
      };
      updateAuthor(authorObject).then(showAuthors);
    }
    // EVENT FOR VIEW AUTHOR BTN
    if (e.target.id.includes('view-author-btn')) {
      console.warn('CLICKED AUTHOR VIEW BOOK', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      viewAuthorDetails(firebaseKey).then(viewAuthor);
    }
    // ADD EVENT FOR REVIEW BUTTON
    if (e.target.id.includes('add-review-btn')) {
      console.warn('CLICKED ADD REVIEW BUTTON', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      addReviewForm(firebaseKey);
    }
    // VIEW REVIEW
    if (e.target.id.includes('view-review-btn')) {
      console.warn('CLICKED REVIEW VIEW BOOK', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      viewReviewDetails(firebaseKey).then(viewReview);
    }
    // SUBMIT REVIEW
    if (e.target.id.includes('submit-review')) {
      e.preventDefault();
      console.warn('clicked submit review', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      const reviewObject = {
        reviewer_name: document.querySelector('#reviewerName').value,
        review_message: document.querySelector('#reviewMessage').value,
        firebaseKey,
        book_id: document.querySelector('#book_id').value
      };
      createReview(reviewObject).then(showReviews);
    }
    // DELETE REVIEW
    if (e.target.id.includes('delete-review')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE REVIEW', e.target.id);
        const [, id] = e.target.id.split('--');
        console.warn(id);
        deleteReview(id).then(showReviews);
      }
    }
    // CLICK EVENT FOR  EDITING/ UPDATING A REVIEW
    if (e.target.id.includes('edit-review-btn')) {
      console.warn('CLICKED EDIT REVIEW', e.target.id);
      const [, id] = e.target.id.split('--');
      getSingleReview(id).then((reviewObj) => addReviewForm(reviewObj));
    }
    // CLICK EVENT FOR EDITING A REVIEW
    if (e.target.id.includes('update-review')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const reviewObject = {
        reviewer_name: document.querySelector('#reviewerName').value,
        author_id: document.querySelector('#book_id').value,
        review_message: document.querySelector('#reviewMessage').value,
        firebaseKey
      };
      updateReview(reviewObject).then(showReviews);
    }
  });
};

export default domEvents;
