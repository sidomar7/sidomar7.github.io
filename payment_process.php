<?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
        $cardNumber = $_POST["card-number"];
        $expirationDate = $_POST["expiration-date"];
        $cvv = $_POST["cvv"];
        $billingAddress = $_POST["billing-address"];

    // You would typically perform payment processing logic here
    // This is just a placeholder for demonstration purposes
    // You should use a payment gateway or payment processor API to handle payments securely

    // Display a message indicating successful payment
        echo "<h2>Payment Successful</h2>";
        echo "<p>Thank you for your purchase!</p>";
        echo "<p>Card Number: $cardNumber</p>";
        echo "<p>Expiration Date: $expirationDate</p>";
        echo "<p>Billing Address: $billingAddress</p>";
        } else {
    // If the form is not submitted, redirect the user back to the payment form
        header("Location: add_to_cart.html");
        exit();
    }
    