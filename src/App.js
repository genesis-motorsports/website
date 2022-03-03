import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './components/Home2';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const ids = {"home": "/", "about": "about", "achievements": "achievements", "sponsors": "sponsors", "gallery": "gallery", "contact": "contact"};
  return (
      <div className="App">
          <Navbar ids={ids} />
          <Home2 ids={ids} />
          <About ids={ids} />
          <Achievements ids={ids}/>
          <Sponsors ids={ids} />
          <Gallery ids={ids} />
          <Footer ids={ids} />
      </div>
  );
}

export default App;
