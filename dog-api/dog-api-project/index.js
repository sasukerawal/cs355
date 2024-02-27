const express = require('express');
const app = express();
const port = 3000;

const breeds = ['labrador', 'beagle', 'poodle', 'husky'];

app.get('/breeds', (req, res) => {
    res.json(breeds); 
});

app.get('/image/:breed', (req, res) => {
    const breed = req.params.breed;
    if (breeds.includes(breed)) {
        const images = [`/images/${breed}1.jpg`, `/images/${breed}2.jpg`]; 
        const randomImage = images[Math.floor(Math.random() * images.length)];
        res.json({ imageUrl: `http://localhost:${port}${randomImage}` }); 
    } else {
        res.status(404).send('Breed not found');
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); 
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dogs.html');
});

