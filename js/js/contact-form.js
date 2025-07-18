function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;

    // Validate Name
    if (name === "") {
        alert("Please enter your name");
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        alert("Please enter your email");
        isValid = false;
    }
    else if (!isValidEmail(email)) {
        alert("Please enter a valid email");
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter your message");
        isValid = false;
    }

    // Return whether the form is valid or not
    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
    return emailRegex.test(email);
}
