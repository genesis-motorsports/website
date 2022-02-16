import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './components/Home2';
import Sponsors from './components/Sponsors';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home2/>
        <About />
        <Sponsors/>
        <Footer/>
    </div>
  );
}

export default App;
