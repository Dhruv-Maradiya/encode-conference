import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import CountDown from "./Components/CountDown";
import Section2 from "./Components/Section2";
import Sponsor from "./Components/Sponsor";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Contact from "./Components/Contact";
import Committee from "./Components/Committee";
function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Main />
      <CountDown />
      <Section2 />
      <Carousel />
      <Sponsor />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
