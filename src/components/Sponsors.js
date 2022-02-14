import React from 'react'
import "./Sponsors.css";
import img1 from "../images/sponsors/download.png";
import img2 from "../images/sponsors/images.png";

const Sponsors = () => {
  return (
    <div>
        <h2>Our Sponsors</h2>
        <div className="sponsor-container">
            <div className="sponsor-item">
                <a href="/">
                    <img src={img1} className="sponsor-img" alt="" />
                </a>
            </div>
            <div className="sponsor-item">
                <a href="/">
                    <img src={img2} className="sponsor-img" alt="" />
                </a>
            </div>
            <div className="sponsor-item">
                <a href="/">
                    <img src={img1} className="sponsor-img" alt="" />
                </a>
            </div>
            <div className="sponsor-item">
                <a href="/">
                    <img src={img2} className="sponsor-img" alt="" />
                </a>
            </div>
            <div className="sponsor-item">
                <a href="/">
                    <img src={img1} className="sponsor-img" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sponsors