


const params = new URLSearchParams(location.search);



results='';

results += 'Name is ' +params.get('fname') + ' ' +params.get('lname') + '<br>';


results += ' Age is '+params.get('age') + '<br>';
results += ' Gender is '+params.get('Gender');

console.log(results)
console.log(params.get('fname'))
console.log(params.get('age'))


document.getElementById('results').innerHTML=results;

const toggleButton = document.getElementById('Toggle-button');
var element=document.body;

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial mode based on stored preference
if (isDarkMode) {
  enableDarkMode();
}

toggleButton.addEventListener('click', () => {
  if (element.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});



function enableDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', 'true');

 }
function disableDarkMode() {
    var element = document.body;
    element.classList.toggle('light-mode');
    localStorage.setItem('darkMode', 'false');}









