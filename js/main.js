//cambio de cantidad de articulos ingresado por el usuario
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});


//Agregar el total de productos al carrito cuando se presiona el boton ADD TO CARt

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.textContent);

addToCartBtn.addEventListener('click', ()=>{

    lastValue = lastValue + userInputNumber;
    cartNotification.textContent = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();

});

//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__checkout-container')

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    }else{
        drawProductInModal();
    }

    
});

//Borrar el contenido del carrito

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click',()=>{
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
        lastValue = 0;
        cartNotification.textContent = lastValue;
    });
}

//cambiar imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector('.gallery__image-container');
const nextGalleryBtn = document.querySelector('.gallery__next');
const previusGalleryBtn = document.querySelector('.gallery__previus');
let imgIndex = 1;


nextGalleryBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer);
});
previusGalleryBtn.addEventListener('click',()=>{
    changePreviusImage(imageContainer);
});



//Mostrar el modal de imagenes cuando hago click en la imagen principal
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close')

imageContainer.addEventListener('click', ()=>{
    imagesModal.style.display = 'flex';
});
 closeModalBtn.addEventListener('click',()=>{
     imagesModal.style.display = 'none';
 });

 //cambiar las imagenes principales desde el thumbnails
 let thumbnails = document.querySelectorAll('.gallery__thumbnail');
 thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click',event=>{
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
});

 //cambiar las imagenes principales desde el thumbnails en el MODAL
 let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
 const modalImageContainer = document.querySelector('.modal-gallery__image-container');
 modalThumbnails = [...modalThumbnails];

 modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event =>{
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    
    });
 });

 //cambiar imagen principal de modal desde flechas en el modal
 const nextModalBtn = document.querySelector('.modal-gallery__next');
 const previusModalBtn = document.querySelector('.modal-gallery__previus');

 nextModalBtn.addEventListener('click',()=>{
    changeNextImage(modalImageContainer);
});
previusModalBtn.addEventListener('click',()=>{
    changePreviusImage(modalImageContainer);
});

//desplegar modal cuando se de click en el menu hamburguesa
const menuBtn = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeBtnNavbar = document.querySelector('.modal-navbar__close-icon');

menuBtn.addEventListener('click',()=>{
    modalNavbar.style.display = 'block';
});
closeBtnNavbar.addEventListener('click',()=>{
    modalNavbar.style.display = 'none';
});





//funciones

function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price"></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
     </div>
    <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x ${lastValue} <span>$${lastValue*125}.00</span>`

}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}

function changePreviusImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}