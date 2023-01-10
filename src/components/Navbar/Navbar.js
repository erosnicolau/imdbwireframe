import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/" exact>Latest</NavLink>
      <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
    </nav>
  );
}
