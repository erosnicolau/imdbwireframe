import './movieList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList(props) {
  const {movies, faves, toggleFavorite} = props;
  
  return (
    <div className='movieList'>
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          id={movie.id} 
          title={movie.title} 
          poster={movie.poster_path} 
          isFavorite={faves.includes(movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
