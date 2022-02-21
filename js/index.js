// ITERATION 1
/*
function updateSubtotal(product) {
  const price = product.querySelector('.price span'); // DOM element for the price of the product
  const quantity = product.querySelector('.quantity input'); // DOM element for the quantity of the product
  const subtotal = product.querySelector('.subtotal span'); // DOM element for the subtotal of the product that will be updated
  const priceNum = price.innerHTML; // the price in number. we use .innetHTML or .innerText for this dom element as it is something that exists between the tags (see the html)
  const quantityNum = quantity.value; // the qty in number. we use the .value because it is an amount the user will need to fill, value is an attribute of the input tag.
  const subtotalNum = priceNum * quantityNum; // simple multiplication of the price * the qty
  subtotal.innerHTML = subtotalNum; // we assign the the value of the multiplication to the innerHTML of the DOM element. Remember this will reference the DOM element the users sees in the browser.
  return subtotalNum; // return the subTotal for later use on updating the total amount of all the products **
}
*/
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  const valueOfPrice = Number(price.innerText); 
  const valueOfQuantity = Number(quantity.value); 

  const sumOfOneProduct = valueOfPrice * valueOfQuantity;
  subTotal.innerText = sumOfOneProduct;
  return sumOfOneProduct;
}

/*
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const grandTotal = document.querySelector('#total-value span');
  const allProducts = document.querySelectorAll('.product');
console.log(allProducts)
  let totalNumber = 0;
  allProducts.forEach(product => {
   let currentElement = updateSubtotal(product);
   console.log(currentElement);
    totalNumber += currentElement
  });
  console.log(totalNumber);
}
*/

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(‘.product’);
  // updateSubtotal(singleProduct);
  // end of test
  let totalSum = 0; // total variable that will be used to get all of the totals
  // ITERATION 2
  const products = document.querySelectorAll('.product'); // we get a nodeList of all of the product DOM elements
  // we can run a forEach on the nodeList created above, this will allow us to execute a function for each product element
  products.forEach((singleProduct) => {
    subtotal = updateSubtotal(singleProduct); // ** this line will execute the updateSubtotal for each product, meaning the subtotal will update on the DOM and also the function will return the subtotal amount
    totalSum += subtotal // to add the current subtotal to the total
  });
  // ITERATION 3
  const total = document.querySelector('#total-value span'); // to target DOM element to reflect the total
  total.innerHTML = totalSum; // to update the total inside the innerHTML of the total DOM element
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProductName = document.createElement("tr");
  const newProductPrice = document.createElement("tr");
  const newProductQuantity = document.createElement("tr");

  const newProductContainer = document.querySelector('tbody')
  newProductContainer.appendChild(newProductName, newProductPrice, newProductQuantity);
  console.log(newProductContainer);


const createProductButton = document.getElementById('#create');
createProductButton.addEventListener("click", (event) => {
  event.createProduct();
  
})
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
