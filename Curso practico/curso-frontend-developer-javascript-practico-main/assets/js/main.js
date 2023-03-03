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
  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive');
  // }

  shoppingCartContainer.classList.add('inactive');

  closeProductDetailAside();

  desktopMenu.classList.toggle('inactive');
}

// menú mobile
function toggleMobileMenu() {
  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive');
  // }

  shoppingCartContainer.classList.add('inactive');
  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

// menú carrito
function toggleCarritoAside() {
  // const isAsideClosed = desktopMenu.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   desktopMenu.classList.add('inactive');
  // }

  desktopMenu.classList.add('inactive');

  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }

  mobileMenu.classList.add('inactive');

  // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  // if (!isProductDetailClosed) {
  //   productDetailContainer.classList.add('inactive');
  // }

  productDetailContainer.classList.add('inactive');

  shoppingCartContainer.classList.toggle('inactive');
}

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
  name: 'Bike',
  price: 50000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 450000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 100000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', 'assets/img/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
