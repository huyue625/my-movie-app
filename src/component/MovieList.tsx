import type { Movie } from "../types/movie"
import MovieItem from "./MovieItem"
interface MovieListProps {
  movies?: Movie[]
  favorites: Movie[]
  onFavorite: (movie: Movie) => void
}


function MovieList({ movies, favorites, onFavorite }: MovieListProps) {
  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>
  }
  return (
    <div className="movie-grid" >
        {movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
            toggleFavorite={() => onFavorite(movie)}
          />
        ))}
    </div>
  )
}

export default MovieList;