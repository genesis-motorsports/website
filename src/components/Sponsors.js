import React from 'react'
import "./Sponsors.css";
import img1 from "../images/sponsors/ansys.png";
import img2 from "../images/sponsors/solidworks.png";

const Sponsors = () => {
    return (
        <div className='outer-home'>
            <div className="image-overlay">
                <div className="container">
                <h4 className="sponsor-heading">OUR SPONSORS</h4>
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
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Sponsors