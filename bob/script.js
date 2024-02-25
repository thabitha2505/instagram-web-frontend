document.addEventListener("DOMContentLoaded", function() {
    const followAll = document.getElementById('follow-all');
    const suggestionContainers = document.querySelectorAll('[id^="suggestions-container"]');

    followAll.addEventListener('click', function() {
        suggestionContainers.forEach(container => {
            container.classList.toggle('hidden');
        });
    });
});

  
document.addEventListener("DOMContentLoaded", function() {
    const followButtons = document.querySelectorAll('.follow-button');

    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent === 'Follow') {
                button.textContent = 'Unfollow';
                // Add follow functionality here
            } else {
                button.textContent = 'Follow';
                // Add unfollow functionality here
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const heartIcons = document.querySelectorAll('.post-footer .like-share-comment .far.fa-heart');

    heartIcons.forEach(function(heartIcon) {
        heartIcon.addEventListener('click', function() {
            heartIcon.classList.toggle('clicked');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you can implement authentication logic (e.g., checking against a database)
        // For this example, let's assume the credentials are valid
        // Redirect to the homepage (replace 'homepage.html' with the actual URL of your homepage)
        window.location.href = 'homepage.html';
    });
});



function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Check if username and password are correct
    if (username === "user1" && password === "user1") {
        alert("Login successful!");
        window.location.href = "homepage.html"; // Redirect to the homepage
        return false; // Prevent form submission (since we're redirecting)
    } else {
        alert("Invalid username or password.");
        return false; // Prevent form submission
    }
}


    function validateRegisterForm() {
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert("Please fill in all fields.");
            return false;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        // Very basic email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


