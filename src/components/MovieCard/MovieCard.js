import './movieCard.css';
import React from 'react';

export default function MovieCard(props) {
  const {title, poster} = props,
    posterUrl = `https://image.tmdb.org/t/p/w154/${poster}`;
  return (
    <div className='movieCard'>
      <img alt={title} src={posterUrl}/>
      <h1>{title}</h1>
    </div>
  )
}
