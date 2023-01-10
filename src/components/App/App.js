import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function App(props) {
  const name = 'IMDB Wireframe';
  const {pathname} = useLocation();
  const [keyword, setKeyword] = useState('');
  
  function saveSearch(term) {
    setKeyword(term);
  }
  
  return (
    <div className="App">
      <Header name={name} />
      <SearchForm keyword={keyword} saveSearch={saveSearch} visible={pathname === '/'}/>
      <Navbar />
      <main className="content">
          <Main keyword={keyword} />
        </main>
    </div>
  );
}
