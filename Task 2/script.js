// JavaScript for Product Details Page

// Function to change the displayed image when a thumbnail is clicked
function showImg(pic) {
    const bigImg = document.querySelector('.big-img img');
    bigImg.src = pic;
}

// Function to handle image zoom on hover
function zoomImageOnHover() {
    const smallImages = document.querySelectorAll('.small-img img');
    smallImages.forEach(smallImg => {
        smallImg.addEventListener('mouseover', () => {
            const bigImg = document.querySelector('.big-img img');
            bigImg.style.transform = 'scale(1.1)';
            bigImg.style.transition = 'transform 0.3s ease';
        });

        smallImg.addEventListener('mouseout', () => {
            const bigImg = document.querySelector('.big-img img');
            bigImg.style.transform = 'scale(1)';
        });
    });
}

// Function to update product details based on size selection
function updateProductDetails() {
    const sizes = document.querySelectorAll('.psize');
    sizes.forEach(size => {
        size.addEventListener('click', () => {
            sizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');

            // Update product details here based on size selection
            // For demonstration purposes, let's just log the selected size
            console.log('Selected size:', size.textContent);
        });
    });
}

// Function to validate quantity input field
function validateQuantity() {
    const quantityInput = document.querySelector('.quantity input');
    quantityInput.addEventListener('change', () => {
        const quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1 || quantity > 5) {
            alert('Please enter a quantity between 1 and 5.');
            quantityInput.value = 1;
        }
    });
}

// Function to handle adding items to the cart
function addToCart() {
    const quantityInput = document.querySelector('.quantity input');
    const quantity = parseInt(quantityInput.value);

    // Assume there's a function addToCartBackend(item, quantity) which sends the item and quantity to the backend for adding to the cart
    // Replace this with your actual backend logic
    const item = {
        name: document.querySelector('.pname').textContent,
        price: document.querySelector('.price').textContent,
        size: document.querySelector('.psize.active').textContent,
        quantity: quantity
    };
    
    addToCartBackend(item, quantity);

    // Provide feedback to the user
    alert(`${quantity} ${item.name}(s) added to cart.`);
}

// Function to handle buying items immediately
function buyNow() {
    // Similar to addToCart, you can handle the buying process here
    alert("Buying functionality is not implemented yet.");
}

// Add event listeners to the buttons
document.querySelector('.cart-btn').addEventListener('click', addToCart);
document.querySelector('.buy-btn').addEventListener('click', buyNow);

// Call additional functions for interactivity
zoomImageOnHover();
updateProductDetails();
validateQuantity();

