import { useState, useEffect } from 'react';
import useMovies from './useMovies';

function useSearch(initialSearchQuery) {
  const { movies, isLoading: moviesLoading, error: moviesError } = useMovies();
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      setSearchResult(movies); 
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);


    const delay = setTimeout(() => {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseSearchQuery)
      );
      setSearchResult(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchQuery, movies]);

  return { searchResult, isLoading, error, setSearchQuery, moviesLoading, moviesError };
}

export default useSearch;