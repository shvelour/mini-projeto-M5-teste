import { Router } from "express";
import { list, add } from "../controllers/MoviesController.js";
const moviesRouter = Router();
const listMovies = list();

moviesRouter.get('/', (req, res) => {
    const names = []
    for (let i = 0; i < listMovies.length; i++) {
        names.push(listMovies[i].name + ', id - ' + listMovies[i].id);
    }
    res.json({ names });
});

moviesRouter.post('/add', (req, res) => {
    const { id, name, year, genre, description } = req.body
    const newMovie = add(id, name, year, genre, description)
    res.json({ newMovie });
})


moviesRouter.get('/genres', (req, res) => {
    const genres = [];

    for (let i = 3; i < listMovies.length; i++) {
        genres.push(listMovies[i].genre);
    }

    res.json({ genres });
});



moviesRouter.get('/documentary', (req, res) => {
    const moviesDocumentary = listMovies.filter(movie => movie.genre === "Documentário");

    if (moviesDocumentary.length > 0) {
        res.json({ moviesDocumentary });
    }
})

moviesRouter.get('/musical', (req, res) => {
    const moviesMusical = listMovies.filter(movie => movie.genre === "Musical");

    if (moviesMusical.length > 0) {
        res.json({ moviesMusical });
    }
})

moviesRouter.get('/drama', (req, res) => {
    const moviesDrama = listMovies.filter(movie => movie.genre === "Drama");

    if (moviesDrama.length > 0) {
        res.json({ moviesDrama });
    }
})

moviesRouter.get('/id/1', (req, res) => {
    if (listMovies[0].id == 1) {
        res.json({ movie1: listMovies[0] });
    }
})

moviesRouter.get('/id/2', (req, res) => {
    if (listMovies[1].id == 2) {
        res.json({ movie2: listMovies[1] });
    }

})

moviesRouter.get('/id/3', (req, res) => {
    if (listMovies[2].id == 3) {
        res.json({ movie3: listMovies[2] });
    }
})

moviesRouter.get('/id/4', (req, res) => {
    if (listMovies[3].id == 4) {
        res.json({ movie4: listMovies[3] });
    }

})

moviesRouter.get('/id/5', (req, res) => {
    if (listMovies[4].id == 5) {
        res.json({ movie5: listMovies[4] });
    }
})

moviesRouter.get('/id/6', (req, res) => {
    if (listMovies[5].id == 6) {
        res.json({ movie6: listMovies[5] });
    }

})

export { moviesRouter };