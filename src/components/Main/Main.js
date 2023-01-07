import './main.css';
import MovieList from '../MovieList/MovieList';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
  const { pathname } = useLocation();
  const { keyword } = props;
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(pathname, keyword)
  }, [pathname, keyword]);

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
