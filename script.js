// script.js

// Event listener to initialize modal when DOM content is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the Contact Us button
    const contactUsButton = document.getElementById("contactUsButton");

    // Show the modal when the button is clicked
    contactUsButton.onclick = function() {
        $('#contactFormModal').modal('show');
    }
});
