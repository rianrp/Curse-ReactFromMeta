import greekSalad from '../assets/images/greek salad.jpg';
import bruschetta from '../assets/images/bruchetta.svg';
import lemonDessert from '../assets/images/lemon dessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Weeks Specials</h2>
        <button className="btn-secondary">Online Menu</button>
      </div>
      <div className="specials-cards">
        <article className="card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-content">
            <div className="card-header">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="#order" className="order-delivery">Order a delivery 🛵</a>
          </div>
        </article>

        <article className="card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#order" className="order-delivery">Order a delivery 🛵</a>
          </div>
        </article>

        <article className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="#order" className="order-delivery">Order a delivery 🛵</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
