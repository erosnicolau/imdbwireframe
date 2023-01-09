import './movieCard.css';

export default function MovieCard(props) {
  const {title, poster, id, isFavorite, toggleFavorite} = props,
    posterUrl = `https://image.tmdb.org/t/p/w154/${poster}`;
  return (
    <div className='movieCard'>
      <img alt={title} src={posterUrl}/>
      <h1>{title}</h1>
      <h2>{id}</h2>
      <button 
        className={`fave ${isFavorite ? 'faved' : ''}`}
        onClick={() => toggleFavorite(id)}
        />
    </div>
  )
}
