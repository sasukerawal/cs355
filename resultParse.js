// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;
  
  // Read the 'darkMode' from localStorage and apply it if necessary
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
      body.classList.add('dark-mode');
  }
  
  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode').toString());
  });
});

// Your existing form and result handling code
const params = new URLSearchParams(location.search);
let results = '';

results += 'Name is ' + params.get('fname') + ' ' + params.get('lname') + '<br>';
results += ' Age is ' + params.get('age') + '<br>';
results += ' Gender is ' + params.get('Gender');

document.getElementById('results').innerHTML = results;

console.log(results);
