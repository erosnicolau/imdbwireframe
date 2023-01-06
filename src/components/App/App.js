import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { useState } from 'react';

export default function App(props) {
  const name = 'IMDB Wireframe';

  const [keyword, setKeyword] = useState('');
  
  function saveSearch(term) {
    setKeyword(term);
  }
  
  return (
    <div className="App">
      <Header name={name} />
      <SearchForm keyword={keyword} saveSearch={saveSearch} />
    </div>
  );
}
