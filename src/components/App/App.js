import './App.css';
import Header from '../Header/Header';

export default function App(props) {
  const name = 'IMDB Wireframe';

  return (
    <div className="App">
      <Header name={name} />
    </div>
  );
}
