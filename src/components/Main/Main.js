import './main.css';
import MovieList from '../MovieList/MovieList';
import FavesList from '../FavesList/FavesList';
import { getMovies, searchMovies } from '../../api';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
  //const { pathname } = useLocation();
  const { keyword } = props;
  const [movies, setMovies] = useState([]);
  const [faves, setFaves] = useState(JSON.parse(localStorage.getItem('favoriteIds')) || []);

  const toggleFavorite = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, isFavorite: !movie.isFavorite };
      }
      return movie;
    });
    setMovies(updatedMovies);

    setFaves((prevFaves) => {
      if (prevFaves.includes(id)) {
        return prevFaves.filter((favoriteId) => favoriteId !== id);
      } else {
        return [...prevFaves, id];
      }
    });
  };

  useEffect(() => {
    if(keyword !== ''){
      searchMovies(keyword, 1).then(response => {
        setMovies(response.results);
      });
    } else {
      getMovies(1).then(response => {
        setMovies(response.results);
      });
    }
  }, [keyword]);

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(faves));
  }, [faves]);


  return (
    <div className="mainContent">
      <Switch>
        <Route path="/" exact>
          <MovieList movies={movies} faves={faves} toggleFavorite={toggleFavorite} />
        </Route>

        <Route path="/favorites">
          <FavesList ids={faves} toggleFavorite={toggleFavorite} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
