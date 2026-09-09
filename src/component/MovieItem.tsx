import type { Movie } from '../types/movie'
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

interface MovieItemProps {
  movie: Movie
  isFavorite: boolean
  toggleFavorite: () => void
}

function MovieItem({ movie, isFavorite, toggleFavorite }: MovieItemProps) {
  return (
<div className="movie-card">
  <img src={movie.Poster} alt={movie.Title} className="movie-poster" />

  <div className="movie-footer">
    <div>
      <h3 className="movie-title">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
    </div>
    <button onClick={toggleFavorite}>
      {isFavorite ? (
        <HeartSolid className="heart-solid" />
      ) : (
        <HeartOutline className="heart-outline" />
      )}
    </button>
  </div>
</div>
  )
}



export default MovieItem