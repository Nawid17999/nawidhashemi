// Get references to DOM elements
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

// Event Listener for the Button
submitBtn.addEventListener('click', () => {
    // Get user input values
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    // Validate input and display custom statement
    if (name && age) {
        output.textContent = `Hello, ${name}! You are ${age} years old.`;
        output.classList.add('text-success');
    } else {
        output.textContent = "Please enter both your name and age.";
        output.classList.add('text-danger');
    }
});
