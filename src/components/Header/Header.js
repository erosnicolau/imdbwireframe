import './header.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Header(props) {
  return (
    <header className="head">
      <h1>
        <Link to="/">{props.name}</Link>
      </h1>
      <Navbar />
    </header>
  );
}
