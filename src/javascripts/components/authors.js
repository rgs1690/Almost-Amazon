// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add Author</button>';
  document.querySelector('#form-container').innerHTML = '';
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card" style='width: 18rem;'>
    <div class="card-body">
    <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
    <p class="auth-Contact">Author Contact: ${item.email}</p>
    <hr>
    <button class="btn btn-info"  id="edit-author-btn--${item.firebaseKey}">Edit Author</button>
    <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
