import clearDom from '../../helpers/clearDom';
import selectBook from './selectBook';

const addReviewForm = (uid, obj = {}) => {
  console.warn(uid);
  clearDom();

  document.querySelector('#form-container').innerHTML += `
  <form>
  <div class="form-group"> 
  <div class="form-group" id="select-book">
      </div>
  <label for="reviewerName">Reviewer's Name</label>
    <input type="text" class="form-control" id="reviewerName" placeholder="Enter your name" value= "${obj.reviewerName || ''}" required>
  </div>
    <label for="reviewMessage">What are your thought's on this book?</label>
    <textarea class="form-control" id="reviewMessage" rows="3" value="${obj.reviewMessage || ''}" required></textarea>
  </div>
  <button type="submit" 
  id="${obj.firebaseKey ? `update-review--${obj.firebaseKey}` : 'submit-review'}" class="btn btn-primary">Submit Review
  </button>
  </form>
`;
  selectBook(uid, `${obj.book_id || ''}`);
};

export default addReviewForm;
