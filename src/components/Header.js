import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Little Lemon" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
