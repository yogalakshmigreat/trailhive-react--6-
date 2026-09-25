import "./HeroStack.css";
import mountainTrail from "../assets/img/mountain-trail.jpg";

export default function HeroStack() {
  return (
    <section className="hero-stack">
      <div className="hero-stack__inner container">
        <h2>
          Find new trails to explore and
          <br />
          adventures to embark on.
        </h2>
        <div className="hero-stack__media">
          <img
            src={mountainTrail}
            alt="Two hikers walking a mountain trail toward snow-capped peaks"
          />
        </div>
      </div>
    </section>
  );
}
