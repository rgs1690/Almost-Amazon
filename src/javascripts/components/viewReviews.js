import clearDom from '../helpers/clearDom';

const viewReview = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
      <div>
       <div>
       <h4 class="text-white ms-5 details">${obj.reviewer_name || ''}</h4>
       <div class="text-white ms-5 details">${obj.review_message}</div>
       <hr>  
       <div class="mt-5">
           <i id="edit-review-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
           <i id="delete-review--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
         </div>
       </div>
       <div class="text-white ms-5 details">
       <img class="card-img-top" src=${obj.bookObj.image} alt=${obj.bookObj.title} style="height: 600px;">  
       <h5>${obj.bookObj.title}</h5> 
         <p>${obj.bookObj.description || ''}</p>
         <hr>
         <p>${obj.bookObj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
           $${obj.bookObj.price}` : `$${obj.bookObj.price}`}</p>      
          </div>
        </div>`;
};
export default viewReview;
