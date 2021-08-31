import clearDom from '../helpers/clearDom';
import addAuthorBooks from './forms/addAuthorBooks';

const viewAuthor = (obj, bookObj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.first_name}  ${obj.last_name}</h5>
       <p>${obj.email || ''}</p>
       <p>${obj.description || ''}</p>
       <p>${obj.favorite ? '<span class="badge bg-warning text-dark"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>' : ''}</p>      
       <hr>
       <div id="authorBooksView"></div>
       </div>`;
  addAuthorBooks(bookObj);
};

/* <img src=${obj.image} alt=${obj.title} style="width: 300px;"> */
export default viewAuthor;
