import signOut from '../helpers/auth/signOut';
import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import { booksOnSale, getBooks } from '../helpers/data/bookData';
import { faveAuthors, getAuthors } from '../helpers/data/authorData';
import { getReviews } from '../helpers/data/reviewData';
import { showReviews } from '../components/reviews';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('Sale Books');
    booksOnSale(uid).then(showBooks);
  });
  // FAVE AUTHORS
  document.querySelector('#fave-authors').addEventListener('click', () => {
    faveAuthors(uid).then(showAuthors);
  });
  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(uid).then(showBooks);
  });
  // REVIEWS
  document.querySelector('#review-books').addEventListener('click', () => {
    getReviews(uid).then(showReviews);
  });
  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then(showAuthors);
  });
};

export default navigationEvents;
