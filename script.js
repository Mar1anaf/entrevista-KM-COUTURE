document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    var errorDiv = document.getElementById("error");
    errorDiv.textContent = ""; // Clear any previous error messages

    // Fetch input values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Basic validation: check if fields are empty
    if (name === "" || email === "" || message === "") {
        errorDiv.textContent = "Please fill out all fields.";
        return; // Stop further execution
    }

    // If all fields are filled, show success message (here an alert)
    alert("Form submitted successfully!");
});
