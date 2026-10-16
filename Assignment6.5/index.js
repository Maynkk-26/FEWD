const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    if (age < 1 || age > 100 || !Number.isInteger(age)) {
        alert("Enter a valid age");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (!terms) {
        alert("Accept the terms and conditions");
        return;
    }

    alert("Registration successful!");
});
