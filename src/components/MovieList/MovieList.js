import './movieList.css';
import React from 'react';
import { getMovies } from '../../api';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList(props) {
  const {list} = props;
  return (
    <div className='movieList'>
      {list.map(movie => (
        <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path}/>
      ))}
    </div>
  );
}
