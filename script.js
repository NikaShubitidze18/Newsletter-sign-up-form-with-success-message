function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('Additional');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Email is valid
        // Optionally, you can open a new page here if needed
        window.location.href = 'new-html.html'; // Replace 'new-page.html' with the URL of the page you want to navigate to
        errorMessage.textContent = ''; // Clear any previous error messages
    } else {
        // Email is invalid
        errorMessage.textContent = 'valid email .';
    }
}
