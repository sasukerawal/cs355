const breedSearch = document.getElementById("breed");
const imageButton = document.getElementById("showimage");
const image = document.getElementById("image-cont");
const breeds = document.getElementById("breeds");

let intervalId; // storing ID of the interval

imageButton.addEventListener('click', () => {
  if (intervalId) clearInterval(intervalId); // Clearing the pervious interval 

  fetch('https://dog.ceo/api/breed/' + breedSearch.value + '/images')
    .then(r => r.json())
    .then(data => {
      let count = 0;
      //  introducing a delay before starting the interval with setTimeout here
      intervalId = setInterval(() => {
        if (count >= data.message.length) count = 0; // Resetting count if it exceeds the  length
        image.src = data.message[count++];
        image.style.display = 'block';
      }, 800);
    });
});

fetch('https://dog.ceo/api/breeds/list/all')
  .then(r => r.json())
  .then(data => {
    Object.keys(data.message).forEach(element => {
      let option = document.createElement('option');
      option.value = element;
      breeds.appendChild(option);
    });
  });
