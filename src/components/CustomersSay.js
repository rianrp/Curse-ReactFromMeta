import avatar1 from '../assets/testimonials/Mario and Adrian A.jpg';
import avatar2 from '../assets/testimonials/Mario and Adrian b.jpg';
import avatar3 from '../assets/testimonials/restaurant chef B.jpg';
import avatar4 from '../assets/testimonials/restaurant.jpg';

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <article className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-header">
            <img src={avatar1} alt="Customer" />
            <h4>Maria Garcia</h4>
          </div>
          <p>"Amazing food and great atmosphere! The Greek salad is a must-try."</p>
        </article>

        <article className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-header">
            <img src={avatar2} alt="Customer" />
            <h4>John Smith</h4>
          </div>
          <p>"Best Mediterranean restaurant in Chicago. The lemon dessert is incredible!"</p>
        </article>

        <article className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-header">
            <img src={avatar3} alt="Customer" />
            <h4>Sarah Johnson</h4>
          </div>
          <p>"Family-friendly with authentic recipes. We come here every week!"</p>
        </article>

        <article className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-header">
            <img src={avatar4} alt="Customer" />
            <h4>Mike Brown</h4>
          </div>
          <p>"Outstanding service and delicious food. Highly recommended!"</p>
        </article>
      </div>
    </section>
  );
}

export default CustomersSay;
