import { getBooks } from '../../helpers/data/bookData';

const selectBook = (uid, bookId) => {
  let domString = `<label for="author">Select a Book</label>
      <select class="form-control" id="book_id" required>
      <option value="">Select a Book</option>`;

  getBooks(uid).then((booksArray) => {
    booksArray.forEach((book) => {
      domString += `<option 
        value="${book.firebaseKey}" 
        ${bookId === book.firebaseKey ? 'selected' : ''}>
        ${book.title}</option>`;
    });

    domString += '</select>';
    document.querySelector('#select-book').innerHTML = domString;
  });
};

export default selectBook;
