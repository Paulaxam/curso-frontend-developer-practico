let emergentMobileMenu = document.querySelector('.mobile-menu');
let menuBurgerIcon = document.querySelector('.burger-menu');
let emergentDesktopMenu = document.querySelector('.desktop-menu');
let userEmail = document.querySelector('.navbar-email');
let productContainer = document.querySelector('.cards-container');
let products = [
    {name: 'Bike', price: 120, type: 'others', image: 'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png'},
    {name: 'Laptop', price: 1200, type: 'electronics', image:'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg'},
    {name: 'Cellphone', price: 500, type: 'electronics', image:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg'},
    {name: 'T-shirt', price: 20, type: 'Clothes', image:'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_960_720.jpg'},
    {name: 'Bike', price: 120, type: 'others', image: 'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png'},
    {name: 'Laptop', price: 1200, type: 'electronics', image:'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg'},
    {name: 'Cellphone', price: 500, type: 'electronics', image:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg'},
    {name: 'T-shirt', price: 20, type: 'Clothes', image:'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_960_720.jpg'},
    {name: 'Bike', price: 120, type: 'others', image: 'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png'},
    {name: 'Laptop', price: 1200, type: 'electronics', image:'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg'},
    {name: 'Cellphone', price: 500, type: 'electronics', image:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg'},
    {name: 'T-shirt', price: 20, type: 'Clothes', image:'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_960_720.jpg'},
    {name: 'Bike', price: 120, type: 'others', image: 'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_960_720.png'},
    {name: 'Laptop', price: 1200, type: 'electronics', image:'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg'},
    {name: 'Cellphone', price: 500, type: 'electronics', image:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg'},
    {name: 'T-shirt', price: 20, type: 'Clothes', image:'https://cdn.pixabay.com/photo/2020/06/05/15/21/yellow-5263498_960_720.jpg'}
    ];


function toogleEmergentDesktopMenu() {
    let isMobileMenuClose = emergentMobileMenu.classList.contains('inactive');
    if(!isMobileMenuClose) {
        emergentMobileMenu.classList.add('inactive');
    }
    emergentDesktopMenu.classList.toggle('inactive');
}

function toggleEmergentMobileMenu() {
    let isDesktopMenuClose = emergentDesktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClose) {
        emergentDesktopMenu.classList.add('inactive');
    }
    emergentMobileMenu.classList.toggle('inactive');
}


function createProductCard(product) {
    let productCard = document.createElement('div');
    let productImage = document.createElement('img');
    let productInfo = document.createElement('div');
    let figureChart = document.createElement('figure');
    let addToChart = document.createElement('img');
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    productContainer.appendChild(productCard);
    productCard.classList.add('product-card');
    productInfo.classList.add('product-info');
    div.classList.add(`${product.type}`);
    productCard.appendChild(productImage);
    productImage.src = product.image;
    productImage.setAttribute('alt',`${product.name}`)
    productCard.appendChild(productInfo);
    productInfo.appendChild(div);
    div.appendChild(p1);
    p1.innerHTML = `$${product.price}`;
    div.appendChild(p2);
    p2.innerHTML = product.name;
    productInfo.appendChild(figureChart);
    figureChart.appendChild(addToChart);
    figureChart.classList.add('add-to-chart-btn')
    addToChart.src = "./icons/bt_add_to_cart.svg";
    addToChart.setAttribute('alt',`añadir a carrito de compras`);
    

    
}



menuBurgerIcon.addEventListener('click', toggleEmergentMobileMenu);
userEmail.addEventListener('click', toogleEmergentDesktopMenu);

for(product of products) {
    createProductCard(product);
}



