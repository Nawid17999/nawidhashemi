// Select the elements to manipulate
const welcomeText = document.getElementById('welcome-text');
const heading = document.querySelector('h1');

// Event: Change Text Content
document.getElementById('change-text-btn').addEventListener('click', () => {
  welcomeText.textContent = 'JavaScript is fun! Explore more interactions below.';
});

// Event: Hide Text
document.getElementById('hide-text-btn').addEventListener('click', () => {
  welcomeText.style.display = 'none';
});

// Event: Show Text
document.getElementById('show-text-btn').addEventListener('click', () => {
  welcomeText.style.display = 'block';
});

// Event: Rotate Heading
document.getElementById('rotate-btn').addEventListener('click', () => {
  heading.classList.toggle('rotated');
});
