import React, {useState, useEffect} from 'react'
import { getMovieById } from '../../api';
import MovieCard from '../MovieCard/MovieCard';

import './favesList.css';

export default function FavesList(props) {
  const {ids, toggleFavorite} = props;
  const [favesMovies, setFavesMovies] = useState([]);
  const [fetchingMap, setFetchingMap] = useState({});

  useEffect(() => {
    console.log(ids, favesMovies);
    let cleanedUpFaves = [];
    ids.forEach((id) => {
      if(!favesMovies.find(fave => fave.id === id)){
        fetchMovie(id);
      }
      let fetched = favesMovies.find(obj => obj.id === id);
      fetched && cleanedUpFaves.push(fetched);
    });
    setFavesMovies(cleanedUpFaves);
  }, [ids]);

  const fetchMovie = async (id) => {
    if(fetchingMap[id]) return; // don't fetch if already present
    setFetchingMap((prev)=>({...prev, [id]: true})); // fetching: true
    const movie = await getMovieById(id);
    setFavesMovies((prevMovies) => [...prevMovies, movie]);
    setFetchingMap((prev)=>({...prev, [id]: false})); // fetching: done
  }

  return (
    <div className='favesList'>
      {favesMovies.map(movie => (
        <MovieCard 
          key={movie.id} 
          id={movie.id} 
          title={movie.title}
          releaseDate={movie.release_date}
          poster={movie.poster_path} 
          isFavorite={ids.includes(movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )
}
