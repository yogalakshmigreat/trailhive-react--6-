import "./HeroHeading.css";
import heroLake from "../assets/img/hero-lake.jpg";

export default function HeroHeading() {
  return (
    <section className="hero-heading">
      <div className="hero-heading__inner container">
        <div className="hero-heading__copy">
          <h1>
            Your Ultimate
            <br />
            Outdoor
            <br />
            Companion
          </h1>
          <p>
            Are you tired of spending hours searching for the perfect hiking
            or biking trail? TrailHive - the ultimate outdoor adventure app
            that connects you with the best trails in your area.
          </p>
          <a href="#" className="btn btn--mint">
            Download the app
          </a>
        </div>

        <div className="hero-heading__media">
          <img src={heroLake} alt="Hiker overlooking a mountain lake" />
        </div>
      </div>
    </section>
  );
}
