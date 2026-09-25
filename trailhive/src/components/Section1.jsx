import "./Section1.css";
import featureSunrise from "../assets/img/feature-sunrise.jpg";
import featureSunset from "../assets/img/feature-sunset.jpg";
import featureGear from "../assets/img/feature-gear.jpg";

const FEATURES = [
  {
    img: featureSunrise,
    alt: "Hiker standing on a ridge at sunrise",
    title: "Access nature",
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    img: featureSunset,
    alt: "Hiker walking through a field at golden hour",
    title: "Access nature",
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
  {
    img: featureGear,
    alt: "Hiking backpack and boots resting on rocks",
    title: "Access nature",
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
  },
];

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1__inner container">
        <div className="section1__intro">
          <span className="section1__eyebrow">Features</span>
          <h2>
            Stay Active
            <br />
            and Healthy
          </h2>
          <a href="#" className="btn btn--dark">
            Learn more
          </a>
        </div>

        <div className="section1__grid">
          {FEATURES.map((f, i) => (
            <div className="section1__card" key={i}>
              <img src={f.img} alt={f.alt} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
