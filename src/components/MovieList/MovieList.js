import './movieList.css';
import React from 'react';
import { getMovies } from '../../api';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
      getMovies(1).then(response => {
        setMovies(response.results);
      });
    }, []);
  
    return (
      <div className='movieList'>
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path}/>
        ))}
      </div>
    );
}
