type Movie = {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string[];
    ratings?: number[];
}

const movies: Map<string, Movie> = new Map();

function exists(id: string): boolean{
    return movies.has(id);
}

export function addMovie(movie: Movie): void {
    movie.ratings = [];
    movies.set(movie.id, movie); 
    console.log(`${movie.title} movie added with id: ${movie.id}`);
}

export function rateMovie(id: string, rating: number): void {
    if(!exists(id)){
        console.log(`Movie with id:${id} does not exists.`);
        return;
    }
     
    if(rating<1 || rating>5){
        console.log("Movie ratings must be between 1 to 5.");
        return;
    }

    const movie = movies.get(id)!;
    movie.ratings!.push(rating);
    movies.set(id, movie);
    //console.log(`\n${movie.title} movie rated successfully with rating ${rating}!!`)
}

export function getAverageRating(id: string): number | undefined {
    if (!exists(id)) {
        console.log("Movie not found!\n");
        return undefined;
    }

    const movie = movies.get(id)!;
    const ratings = movie.ratings!;

    if (ratings.length === 0) {
        console.log("No ratings available for this movie.");
        return undefined;
    }

    let total = 0;

    ratings.forEach(rating => total += rating);
    const averageRating = total / ratings.length;

    return averageRating;
}

export function getTopRatedMovies(): Movie[] {
    const moviesArray = Array.from(movies.values()).filter(movie => movie.ratings!.length > 0);

    if (moviesArray.length === 0) {
        console.log("No movies have been rated yet.");
        return [];
    }


    moviesArray.sort((a, b) => {
        let totalA = 0, totalB = 0;

        a.ratings!.forEach(rating => totalA += rating);
        b.ratings!.forEach(rating => totalB += rating);

        const avgA = totalA / a.ratings!.length;
        const avgB = totalB / b.ratings!.length;

        return avgB - avgA;
    });

    return moviesArray;
}

export function getMoviesByGenre(genre: string): Movie[] {
    return Array.from(movies.values()).filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
}


export function getMoviesByDirector(director: string): Movie[] {
    return Array.from(movies.values()).filter(movie => movie.director === director);
}

export function searchMoviesBasedOnKeyword(key: string): Movie[] {
    const result: Movie[] = [];
    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(key.toLowerCase())) {
            result.push(movie);
        }
    });
    return result;
}

export function getMovie(id: string): Movie | null {
    return movies.get(id) || null;
}

export function removeMovie(id: string): void {
    if (!exists(id)) {
        console.log("Movie not found!\n");
        return;
    }
    const movie = movies.get(id)!;
    movies.delete(id);
    console.log(`${movie.title} movie with id:${id} removed successfully!!\n`);
}

export function getAllMovies(): Movie[] {
    return Array.from(movies.values());
}