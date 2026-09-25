import Navbar from "./components/Navbar.jsx";
import HeroHeading from "./components/HeroHeading.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import HeroStack from "./components/HeroStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHeading />
      <Section1 />
      <Section2 variant="brands" />
      <HeroStack />
      <Section2 variant="photo" />
      <Footer />
    </div>
  );
}
