import clearDom from '../helpers/clearDom';

const showReviews = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card">
      <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.reviewer_name}</h5>
      <p class="card-text bold">${item.review_message}</p>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-review-btn--${item.firebaseKey}"></i>
      <i id="edit-review-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
      <i id="delete-review--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
      </div>`;
  });
};
const emptyReviews = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showReviews, emptyReviews };
