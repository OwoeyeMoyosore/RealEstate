import Header from "./components/Header/main";
import HeroSection from "./components/HeroSection/main";
import "../src/App.css"
import Companies from "./components/Companies/main";
import Residencies from "./components/Residencies/main";
import Values from "./components/Values/main";

function App() {
  return (
    <div className="App">
      <div>
        {/* <div className="white-gradient"/> to make the white circle gradient */}
        <Header />
        <HeroSection />
      </div>
      <Companies />
      <Residencies />
      <Values />
 
    </div>
 
  );
}

export default App;
