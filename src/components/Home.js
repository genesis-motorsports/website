import React from 'react';
import "./Home.css";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";

const Home = () => {
    return <div>
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={home1} className="d-block carousel-img" alt="CarouselImage1" style={{width:"100%"}}/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={home2} className="d-block carousel-img" alt="CarouselImage2" style={{width:"100%"}}/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={home3} className="d-block carousel-img" alt="CarouselImage3" style={{width:"100%"}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>;
};

export default Home;
