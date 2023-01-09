import './main.css';
import MovieList from '../MovieList/MovieList';
import { getMovies, searchMovies } from '../../api';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
  const { pathname } = useLocation();
  const { keyword } = props;
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if(keyword !== ''){
      console.log('search for: ', keyword, '!');
      searchMovies(keyword, 1).then(response => {
        console.log(response.results);
        setMovies(response.results);
        return;
      });
    } else {
      getMovies(1).then(response => {
        setMovies(response.results);
      });
    }
  }, [keyword]);

  return (
    <div className="mainContent">
      <Switch>
        <Route path="/">
          <MovieList list={movies} />
        </Route>

        <Route path="/favorites">
          <MovieList list={favorites} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
