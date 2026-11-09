
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      review: "MOCO transformed our kitchen beyond expectations. The quality of materials and the finish is truly premium. Worth every penny!",
      name: "Priya Sharma",
      city: "Mumbai"
    },
    {
      review: "From design to installation, the entire process was seamless. Our L-shaped kitchen is now the highlight of our home.",
      name: "Rajesh Menon",
      city: "Bangalore"
    },
    {
      review: "We compared multiple brands and MOCO offered the best value. The 10-year warranty gave us complete confidence.",
      name: "Anita Gupta",
      city: "Delhi"
    },
    {
      review: "The modular design makes it so easy to organize everything. Installation was done in under a week. Highly recommended!",
      name: "Karthik Iyer",
      city: "Chennai"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__heading">
        <p>TESTIMONIALS</p>
        <h2>What Our Clients Say</h2>
      </div>

      <div className="testimonials__grid">
        {reviews.map((item, index) => (
          <div className="testimonial__card" key={index}>
            <div className="testimonial__stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon icon={faStar} key={star} />
              ))}
            </div>

            <p className="testimonial__review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>
            <span>{item.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
