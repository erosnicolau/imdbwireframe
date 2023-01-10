import './movieCard.css';

export default function MovieCard(props) {
  const {title, releaseDate, poster, id, isFavorite, toggleFavorite} = props,
    posterUrl = `https://image.tmdb.org/t/p/w154/${poster}`;
  return (
    <div className='movieCard'>
      <img alt={title} src={posterUrl}/>
      <div className='releaseDate'>Release Date: {releaseDate}</div>
      <h1>{title}</h1>
      <button 
        className={`fave ${isFavorite ? 'faved' : ''}`}
        onClick={() => toggleFavorite(id)}
        />
    </div>
  )
}
