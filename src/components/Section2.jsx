import "./Section2.css";
import testimonialBg from "../assets/img/testimonial-bg1.png";
import topoBg from "../assets/img/section2-bg.jpg";
import dellLogo from "../assets/logos/dell.png";
import zendeskLogo from "../assets/logos/zendesk.png";
import rakutenLogo from "../assets/logos/rakuten.png";
import pacificLogo from "../assets/logos/pacific-funds.png";
import ncrLogo from "../assets/logos/ncr.png";
import latticeLogo from "../assets/logos/lattice.png";
import tedLogo from "../assets/logos/ted.png";

const BRANDS = [
  { name: "Dell", src: dellLogo },
  { name: "Zendesk", src: zendeskLogo },
  { name: "Rakuten", src: rakutenLogo },
  { name: "Pacific Funds", src: pacificLogo },
  { name: "NCR", src: ncrLogo },
  { name: "Lattice", src: latticeLogo },
  { name: "TED", src: tedLogo },
];

/**
 * Testimonial section, reused twice in the page with a different variant:
 *  - "brands"  -> topo-pattern background + trusted-by brand strip (John R.)
 *  - "photo"   -> full-bleed photo background (Sara L.)
 */
export default function Section2({ variant = "brands" }) {
  if (variant === "photo") {
    return (
      <section
        className="section2__block section2__block--photo"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="section2__content container">
          <span className="section2__eyebrow">Testimonial</span>
          <p className="section2__quote">
            "I love the social networking aspect of TrailHive. It's great to
            connect with other hikers and bikers and plan group events
            together."
          </p>
          <p className="section2__author">- Sara L.</p>
          <a href="#" className="btn btn--mint">
            Learn More
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section2__block section2__block--dark"
      style={{ backgroundImage: `url(${topoBg})` }}
    >
      <div className="section2__content container">
        <span className="section2__eyebrow">Testimonial</span>
        <p className="section2__quote">
          "TrailHive has completely changed the way I explore the outdoors.
          The personalized trail recommendations and virtual challenges have
          kept me motivated and engaged with my adventures."
        </p>
        <p className="section2__author">- John R.</p>

        <div className="section2__trusted">
          <p>
            Trusted by teams at over <strong>1,000</strong> of the world's
            leading organizations
          </p>
          <div className="section2__brands">
            {BRANDS.map((b) => (
              <span key={b.name} className="section2__brand">
                <img src={b.src} alt={b.name} className="section2__brand-img" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
