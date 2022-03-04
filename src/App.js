import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home2 from './components/Home2';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const ids = {"home": "/", "about": "about", "achievements": "achievements", "sponsors": "sponsors", "gallery": "gallery", "contact": "contact"};

    const [sponsorView, setSponsorView] = useState("View More")
    const handleSponsor = () => {
        sponsorView === "View More" ? setSponsorView("View Less") : setSponsorView("View More")
    }

    const [galleryView, setGalleryView] = useState("View More");
    const handleGallery = () => {
      galleryView === "View More" ? setGalleryView("View Less") : setGalleryView("View More");
    }

  return (
      <div className="App">
          <Navbar ids={ids} setSponsorView={setSponsorView} setGalleryView={setGalleryView}/>
          <Home2 ids={ids} />
          <About ids={ids} />
          <Achievements ids={ids}/>
          <Sponsors ids={ids} sponsorView={sponsorView} handleSponsor={handleSponsor}/>
          <Gallery ids={ids} galleryView={galleryView} setGalleryView={setGalleryView} handleGallery={handleGallery}/>
          <Footer ids={ids} />
      </div>
  );
}

export default App;
