const addAuthorBooks = (array) => {
  array.forEach((obj) => {
    document.querySelector('#authorBooksView').innerHTML += `
       <div class="card">
            <img class="card-img-top" src=${obj.bookObj.image} alt=${obj.bookObj.title} style="height: 400px;">
            <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${obj.bookObj.title}</h5>
            <p class="card-text bold">${obj.bookObj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.bookObj.price}` : `$${obj.bookObj.price}`}</p>
            <hr>
        </div>
     </div>
       `;
  });
};
export default addAuthorBooks;
