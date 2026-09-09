import { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
interface SearchBarProps {
  fetchMovies: (query: string) => void;
}

function SearchBar({ fetchMovies }: SearchBarProps) {
  const [query, setQuery] = useState('')

  return (
    <form className="search-container" onSubmit={e => {
      e.preventDefault()
      fetchMovies(query)
    }}>
      <div className="search-wrapper">
        <MagnifyingGlassIcon className="search-icon" />
        <input className="search-input" type="text" placeholder="Search movies..." value={query} onChange={e => setQuery(e.target.value)} />
        <button className="search-button" type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchBar  