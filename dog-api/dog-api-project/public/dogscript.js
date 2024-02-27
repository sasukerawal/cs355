
var breedSelect = document.getElementById("breed");
var imageButton = document.getElementById("showimage");
var imageDisplay = document.getElementById("image-cont");
var breedsDatalist = document.getElementById("breeds");


function fetchBreeds() {
    fetch('http://localhost:3000/breeds')
        .then(response => response.json())
        .then(breeds => {
            breeds.forEach(breed => {
                var option = document.createElement('option');
                option.value = breed;
                breedsDatalist.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));
}


function fetchImage() {
    var selectedBreed = breedSelect.value;
    fetch('http://localhost:3000/image/' + selectedBreed)
        .then(response => response.json())
        .then(data => {
            imageDisplay.src = data.imageUrl;
            imageDisplay.style.display = 'block'; 
        })
        .catch(error => console.error('Error fetching image:', error));
}


imageButton.addEventListener('click', function() {
    fetchImage(); 
});


fetchBreeds();
