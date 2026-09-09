import { useState } from 'react'
import SearchBar from './component/SearchBar'
import MovieList from './component/MovieList'
import type { Movie, OmdbSearchResponse } from './types/movie'
import './App.css'

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [favorites, setFavorites] = useState<Movie[]>([])

  const fetchMovies = async (query: string) => {
    const trimmedQuery = query.trim()
    if (!trimmedQuery) {
      setMovies([])
      return
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=11ca847d&type=movie&s=${encodeURIComponent(trimmedQuery)}`,
      )
      if (!response.ok) {
        throw new Error(`Movie search failed: ${response.status}`)
      }

      const data: OmdbSearchResponse = await response.json()
      if (data.Response === "True") {
        setMovies(data.Search)
      } else {
        setMovies([])
      }
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  const toggleFavorite = (movie: Movie) => {
    const isFav = favorites.some(fav => fav.imdbID === movie.imdbID)
    if (isFav) {
      setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID))
    } else {
      setFavorites([...favorites, movie])
    }
  }

  return (
    <div className="movie_app">
      <h1 className="search_title">🎬 Movie Search (React + TS)</h1>

       <SearchBar  fetchMovies={fetchMovies} />

      <MovieList
        movies={movies}
        favorites={favorites}
        onFavorite={toggleFavorite}
      /> 
    </div>
  )
}

export default App
