const srcCont = document.getElementsByClassName("src-cont");
const breedSearch = document.getElementById("breed");
const imageButton = document.getElementById("showimage");
const imageContainer = document.getElementById("image");
const image = document.getElementById("image-cont")
const breeds = document.getElementById("breeds")





imageButton.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breed/'+ breedSearch.value +'/images')
    .then(r=>r.json())
    .then(data=>{
        count = 0
        setInterval(()=>{
image.src = data.message[count];
count ++;
image.style.display = 'block'


        },5000)
    });

})

fetch('https://dog.ceo/api/breeds/list/all')
    .then(r=>r.json())
    .then(data=>{
        for (let element in data.message) {
            option = document.createElement('option');
            option.value= element;
            breeds.appendChild(option)


        };
    })

