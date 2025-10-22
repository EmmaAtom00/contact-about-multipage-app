document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name === '') {
            showError('error-name', 'Full name is required');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('error-email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('error-email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (subject === '') {
            showError('error-subject', 'Subject is required');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError('error-message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('error-message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            form.hidden = true;
            successMessage.hidden = false;

            // Reset form after 3 seconds
            setTimeout(function () {
                form.reset();
                form.hidden = false;
                successMessage.hidden = true;
            }, 3000);
        }
    });

    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.hidden = false;
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(function (error) {
            error.textContent = '';
            error.hidden = true;
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
