import { addMovie, rateMovie, getAverageRating, getTopRatedMovies, getMovie, getMoviesByGenre, 
    getMoviesByDirector, searchMoviesBasedOnKeyword, removeMovie, getAllMovies } from "./movieDB";

// Adding movies
addMovie({
id: "one",
title: 'Pokiri',
director: 'Puri Jagannadh',
releaseYear: 2006,
genre: ['Action']
});

addMovie({
id: "two",
title: 'Businessman',
director: 'Puri Jagannadh',
releaseYear: 2012,
genre: ['Action', 'Crime']
});

addMovie({
id: "three",
title: 'Badri',
director: 'Puri Jagannadh',
releaseYear: 2000,
genre: ['Action', 'Romance']
});

addMovie({
id: "four",
title: 'Desamuduru',
director: 'Puri Jagannadh',
releaseYear: 2007,
genre: ['Action', 'Romance']
});

addMovie({
id: "five",
title: 'Nuvve Nuvve',
director: 'Trivikram Srinivas',
releaseYear: 2002,
genre: ['Romance', 'Drama']
});

addMovie({
id: "six",
title: 'Attarintiki Daredi',
director: 'Trivikram Srinivas',
releaseYear: 2013,
genre: ['Drama', 'Family']
});

addMovie({
id: "seven",
title: 'Arya2',
director: 'Sukumar',
releaseYear: 2009,
genre: ['Romance', 'Action']
});

addMovie({
id: "eight",
title: 'Chatrapathi',
director: 'S.S. Rajamouli',
releaseYear: 2005,
genre: ['Action', 'Drama']
});

console.log("\n");

// Rating movies
rateMovie("one", 5);
rateMovie("one", 5);
rateMovie("one", 2);
rateMovie("one", 3);
rateMovie("one", 4);

rateMovie("two", 4);
rateMovie("two", 4);
rateMovie("two", 1);
rateMovie("two", 2);

rateMovie("three", 3);
rateMovie("three", 4);
rateMovie("three", 2);
rateMovie("three", 3);


rateMovie("four", 4);
rateMovie("four", 1);
rateMovie("four", 1);


rateMovie("five", 5);
rateMovie("five", 3);
rateMovie("five", 2);
rateMovie("five", 3);

rateMovie("six", 4);
rateMovie("six", 5);
rateMovie("six", 3);
rateMovie("six", 3);

rateMovie("seven", 5);
rateMovie("seven", 2);
rateMovie("seven", 5);
rateMovie("seven", 4);


rateMovie("eight", 2);
rateMovie("eight", 2);
rateMovie("eight", 1);
rateMovie("eight", 3);





// Getting average rating of a movie
const avgRating = getAverageRating("one");
console.log(`\nAverage rating of movie 'Pokiri': ${avgRating}`);

// Getting top-rated movies
const topRatedMovies = getTopRatedMovies();
console.log("\nTop-rated movies:", topRatedMovies);

// Getting a movie by ID
const movie = getMovie("one");
console.log("\nMovie with ID 'one':", movie);

// Getting movies by genre
const actionMovies = getMoviesByGenre("Action");
console.log("\nAction movies:", actionMovies);

// Getting movies by director
const TriviMovies = getMoviesByDirector("Trivikram Srinivas");
console.log("\nMovies directed by Trivikram Srinivas:", TriviMovies);


// Searching movies based on keyword
const searchResults = searchMoviesBasedOnKeyword("at");
console.log("\nSearch results for 'at':", searchResults);

// Removing a movie
removeMovie("four");


// Getting all movies
console.log("\nAll movies:", getAllMovies());