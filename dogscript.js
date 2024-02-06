document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/dog-api/documentation')
    .then(response => response.json())
    .then(data => {
        const breedsObject = data.message;
        const breedsList = Object.keys(breedsObject);
        const dataList = document.getElementById('breeds');

        breedsList.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            dataList.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching dog breeds:', error));
});