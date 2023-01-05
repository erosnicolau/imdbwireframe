import './header.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="head">
      <h1>
        <Link to="/">{props.name}</Link>
      </h1>
      <Nav />
    </header>
  );
}
