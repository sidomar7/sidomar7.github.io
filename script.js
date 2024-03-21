// Function to validate the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if name, email, and message fields are empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Validate email format using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Function to handle form submission
function submitForm() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Form is valid, proceed with form submission
            // You can perform additional actions here, such as sending form data to a server
            alert("Form submitted successfully!");
            form.reset(); // Reset form fields
        }
    });
}

// Call the submitForm function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    submitForm();
});


function addToCart(productId) {
    // You can implement cart functionality here
    alert("Product added to cart! Product ID: " + productId);
}

// Event listener for add to cart buttons
document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productId = this.getAttribute("data-product-id");
            addToCart(productId);
        });
    });
});

function addToCart(productId) {
    // Create a list item for the added product
    var cartItem = document.createElement("li");
    cartItem.textContent = "Product ID: " + productId;

    // Append the item to the cart display
    var cart = document.getElementById("cart-items");
    cart.appendChild(cartItem);
}

// Event listener for add to cart buttons
document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productId = this.getAttribute("data-product-id");
            addToCart(productId);
        });
    });
});

var cartItems = [];

// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
    // Check if the product is already in the cart
    var existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
        // If the product already exists, increase its quantity
        existingItem.quantity++;
    } else {
        // If the product doesn't exist, add it to the cart
        cartItems.push({
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            quantity: 1
        });
    }

    // Update the cart display
    renderCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    // Find the index of the product in the cart
    var index = cartItems.findIndex(item => item.productId === productId);

    if (index !== -1) {
        // If the product exists, decrease its quantity
        cartItems[index].quantity--;

        // If quantity reaches zero, remove the product from the cart
        if (cartItems[index].quantity === 0) {
            cartItems.splice(index, 1);
        }
    }

    // Update the cart display
    renderCart();
}

// Function to calculate the total value of the products in the cart
function calculateTotal() {
    var total = cartItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
    return total.toFixed(2);
}

// Function to render the cart display
function renderCart() {
    var cartList = document.getElementById("cart-items");
    var totalDisplay = document.getElementById("total");

    // Clear previous cart items
    cartList.innerHTML = "";

    // Render cart items
    cartItems.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - $${item.productPrice.toFixed(2)} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });

    // Update total display
    totalDisplay.textContent = "Total: $" + calculateTotal();
}

// Event listener for checkout button
document.getElementById("checkout-btn").addEventListener("click", function() {
    // Perform checkout process here (e.g., redirect to payment page)
    alert("Redirecting to payment page...");
});

// Example usage:
// addToCart(productId, productName, productPrice);
// removeFromCart(productId);