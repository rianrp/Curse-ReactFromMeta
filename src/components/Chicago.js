import chefA from '../assets/testimonials/Mario and Adrian A.jpg';
import chefB from '../assets/testimonials/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
          sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
          consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        <img src={chefA} alt="Chef Mario" className="about-img-1" />
        <img src={chefB} alt="Chef Adrian" className="about-img-2" />
      </div>
    </section>
  );
}

export default Chicago;
