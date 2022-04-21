const log = console.log

log('JS LOADED')

// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  
  const total = price * quantity;
  const subTotal = product.querySelector('.subtotal span').innerText = total;
  
  return subTotal
 
}

function calculateAll() {

  // ITERATION 2
  const allProductsArr = Array.from(document.getElementsByClassName('product'));
  let total = 0;

  allProductsArr.forEach((product) => {
    total += updateSubtotal(product);
  })
  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span').textContent = total;

  return total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const toDelete = target.parentNode.parentNode;
  
  toDelete.remove();

  calculateAll();

}

// ITERATION 5

function createProduct() {
  const newProdName = document.querySelector('.create-product td input[type=text]').value;
  const newProdPrice = document.querySelector('.create-product td input[type=number]').value;

  const newProd = document.querySelector('.product').cloneNode(true); 

  newProd.querySelector('.name span').innerText = newProdName;
  newProd.querySelector('.price span').innerText = newProdPrice;
  newProd.querySelector('.btn-remove').addEventListener('click', removeProduct);

  document.querySelector("tbody").appendChild(newProd);

  newProdName.value = '';
  newProdPrice.value = 0;
  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeItemsBtn = Array.from(document.getElementsByClassName('btn btn-remove'));
  
  removeItemsBtn.forEach((el) => el.addEventListener('click', removeProduct));

  const btnCreateProd = document.getElementById('create');
  if (btnCreateProd) { btnCreateProd.addEventListener('click', createProduct)};
});
