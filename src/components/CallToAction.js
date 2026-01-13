import { Link } from 'react-router-dom';
import heroImage from '../assets/images/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/reservations">
          <button className="btn-primary">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Restaurant food" />
      </div>
    </section>
  );
}

export default CallToAction;
