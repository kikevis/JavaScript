const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu); // menú correo
menuHamIcon.addEventListener('click', toggleMobileMenu); // menú mobile
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // menú carrio
productDetailCloseIcon.addEventListener('click', closeProductDetailAside); // cerrar producto

// menú correo
function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  closeProductDetailAside();
  desktopMenu.classList.toggle('inactive');
}

// menú mobile
function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive');
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive');
}

// menú carrito
function toggleCarritoAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}

// function toggleProductDetailAside(){
//   shoppingCartContainer.classList.add('inactive');
//   desktopMenu.classList.add('inactive');
//   mobileMenu.classList.add('inactive');
//   productDetailContainer.classList.toggle('inactive');
// }

// open producto
function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

// cerrar producto
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

// lista de productos
const productList = [];
productList.push({
  name: 'Portátil Ryzen 5',
  categorie: 'Portatiles',
  price: '2.000.000',
  image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
});
productList.push({
  name: 'Portátil Ryzen 7',
  categorie: 'Portatiles',
  price: '3.000.000',
  image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
});

function renderProducts(arr) {
  for (product of arr) {
    // CARD
    const productCard = document.createElement('div'); //div
    productCard.classList.add('product-card'); //clase

    const productImg = document.createElement('img'); //img
    productImg.setAttribute('src', product.image); //atributo
    productImg.addEventListener('click', openProductDetailAside); //evento

    const productInfo = document.createElement('div'); //div
    productInfo.classList.add('product-info'); //clase

    const productInfoDiv = document.createElement('div'); //div

    const productPrice = document.createElement('p'); //p
    productPrice.innerText = '$' + product.price; //precio
    const productName = document.createElement('p'); //p
    productName.innerText = product.name; //nombre

    //
    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', 'assets/img/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
