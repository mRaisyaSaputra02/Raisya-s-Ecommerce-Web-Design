// Ini untuk mengubah tampilan gambar yang besar ketika mengklik salah satu gambar kecil dibawahnya
let mainImage = document.getElementById('main-image');

function changeImage(imageSrc) {
    mainImage.src = imageSrc
}

// Ini fitur lightbox
// Ini untuk membuka lightbox ketika mengklik gambar terbesar
// Juga untuk menutup lightbox ketika user mengklik area selain lightbox
// Juga untuk tombol X berfungsi untuk menutup lightbox
let lightboxOverlay = document.querySelector('.lightbox-overlay')

mainImage.addEventListener('click', () => {
    lightboxOverlay.style.display = 'flex';
});

lightboxOverlay.addEventListener('click', (event) => {
    if (event.target === lightboxOverlay) {
        lightboxOverlay.style.display = 'none';
    };
});

function closeLightboxBtn() {
    lightboxOverlay.style.display = 'none';
};

// Ini untuk tombol previous dan next
// Juga untuk mengubah gambar besar di lightbox ketika user mengklik gambar di bawahnya
let lightboxMainImage = document.getElementById('lightbox-main-image');
let currentImageIndex = 0;
let images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];

function previousLightboxBtn() {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex = currentImageIndex -1;
    }
    lightboxMainImage.src = images[currentImageIndex];
};

function nextLightboxBtn() {
    if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = currentImageIndex + 1;
    }
    lightboxMainImage.src = images[currentImageIndex];
};

function lightboxChangeImage(imageSrc) {
    lightboxMainImage.src = imageSrc
};

// Ini untuk mengubah berapa total quantity sepatu yang akan dibeli
let quantity = document.getElementById('quantity');

function decreaseQuantity() {
    if (quantity.textContent > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    };
};

function increaseQuantity() {
    if (quantity.textContent > 0) {
        quantity.textContent = parseInt(quantity.textContent) + 1;
    };
};

// Ini untuk memunculkan icon kecil warna orange di gambar keranjang saat mengklik Add To Cart
// Juga untuk menghitung secara otomatis berapa jumlah total barang yang dibeli dan total harganya
// isAddedToCart adalah variabel flag yang berfungsi untuk memberitahu ke iconCart bahwa tombol sudah di klik
let cartBadge = document.querySelector('.icon-cart-badge')
let isAddedToCart = false;


function addToCartBtn() {
    cartBadge.style.display = 'flex';
    cartBadge.textContent = quantity.textContent;

    let selectedQuantity = quantity.textContent;
    let itemPrice = 125.00;
    let totalPrice = itemPrice * selectedQuantity

    document.querySelector('.cart-quantity').textContent = 'x ' + selectedQuantity;
    document.querySelector('.cart-total-price').textContent = '$ ' + totalPrice.toFixed(2);

    isAddedToCart = true;

};

// Ini fitur keranjang
// Ini untuk menampilkan bagian keranjang
// Jadi jika user belum mengklik tombol Add To Cart, maka isAddedToCart akan bernilai false, yang akan menampilkan bahwa keranjangnya kosong
// Sebaliknya jika user sudah mengklik tombol Add To Cart, maka isAddedToCart akan bernilai true, yang akan menampilkan bahwa keranjang terisi
let iconCart = document.querySelector('.icon-cart');
let addToCartOverlay = document.querySelector('.add-to-cart-overlay')
let cartContainerEmpty = document.querySelector('.cart-container-empty');
let cartContainerFilled = document.querySelector('.cart-container-filled');
let cartCheckoutBtn = document.getElementById('cart-checkout-btn');

iconCart.addEventListener('click', () => {
    if (isAddedToCart === true) {
        addToCartOverlay.style.display = 'flex';
        cartContainerFilled.style.display = 'flex';
        cartCheckoutBtn.style.display = 'flex';
        cartContainerEmpty.style.display = 'none';
    } else {
        addToCartOverlay.style.display = 'flex';
        cartContainerEmpty.style.display = 'flex';
    };

});

// Ini untuk menutup keranjang jika user mengklik area selain keranjang
// Juga untuk menghapus semua yang ada di keranjang dan icon kecil tadi yang warna orange
addToCartOverlay.addEventListener('click', (event) => {
    if (event.target === addToCartOverlay) {
        addToCartOverlay.style.display = 'none';
    };
});

function cartDeleteItemBtn() {
    cartContainerFilled.style.display = 'none';
    cartContainerEmpty.style.display = 'flex';
    cartCheckoutBtn.style.display = 'none';
    cartBadge.style.display = 'none';
};



// MENERIMA MASUKAN, SARAN, DAN KRITIKAN