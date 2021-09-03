import clearDom from '../helpers/clearDom';

const showReviews = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#addReview').innerHTML += `
  <div class="card">
    <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.reviewerName}</h5>
        <p class="card-text bold">${item.reviewMessage}</p>
        <hr>
        <i id="edit-review-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-review--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
};

const emptyReviews = () => {
  document.querySelector('#addReview').innerHTML = '<h1>No Reviews</h1>';
};

export { showReviews, emptyReviews };
