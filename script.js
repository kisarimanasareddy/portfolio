// 1. Welcome Message
function welcomeMessage() {
    alert("Welcome to my portfolio!");
}


// 2. Show Skills
function changeText() {
    const role = document.getElementById("role");

    role.textContent = "HTML | CSS | JavaScript | Python | React";
}


// 3. Dark Mode
function darkMode() {
    document.body.classList.toggle("dark-mode");

    const darkBtn = document.getElementById("darkBtn");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "Light Mode";
    } else {
        darkBtn.textContent = "Dark Mode";
    }
}


// 4. Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("Thank you, " + name + "! Your form was submitted successfully.");

    contactForm.reset();
});


// 5. Automatic Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();