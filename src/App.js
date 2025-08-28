import "./App.css";
import Logo from "./assets/web_logo.png";
import HeroImage from "./assets/img_hero.png";
import MetalPriceChecker from "./components/MetalPriceChecker";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="gold">Gold Price Check</h1>
      </header>

      <div className="body">
        <MetalPriceChecker />
        <div className="hero">
          <img src={HeroImage} alt="gold and silver" />
          <p>
            Track today’s gold price in real time. Our prices are updated
            instantly from trusted market APIs, so you always get the most
            accurate value. Whether you’re an investor, jeweler, or just
            curious, this tool helps you stay informed about the latest gold
            rates.
          </p>
        </div>
      </div>

      <footer className="footer">
        <a href="mailto:rakhshan0602@gmail.com">
          © 2025 Gold Price Check | Made by Rakhshan Khalid
        </a>
      </footer>
    </div>
  );
}

export default App;
