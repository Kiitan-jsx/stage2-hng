import { useEffect, useState } from "react";

function useMovie(id) {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
    const fetchMovies = async () => {
      try { 
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}` 
          }
        };
    
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    
        if (response.status === 200) {
          const data = await response.json();
          setMovie(data);
          setIsLoading(false);
        } else {
          setError(new Error('Error fetching data from TMDB'));
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [id]);
  return { movie, isLoading, error };
}

export default useMovie;