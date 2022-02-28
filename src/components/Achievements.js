import React from 'react'
import "./Achievements.css"
import home2 from "../images/home2.jpg"

const Achievements = (props) => {
    return (
        <div className="outer-home">
            <div className="image-overlay">
                <div className='container' id={`${props.ids.achievements}`}>
                    <p className="achievements ach-heading">ACHIEVEMENTS</p>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators margin-t">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="achievement-body">
                                    {/* <p className="achievements ach-text">ACHIEVEMENTS</p> */}
                                    <div className="achievement-container">
                                        <div className="achievement-row">
                                            <div className="achievement-col">
                                                <img src={home2} alt="Achievements 1" className='ach-img' /><br />
                                                <p className="gokart ach-text">GO KART</p>
                                            </div>
                                            <div className="achievement-col" id="tablee">
                                                <table className="table table-borderless  table-dark">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="cols">RACE</th>
                                                            <th scope="col">RANK</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>International Series of Karting 2017</td>
                                                            <td>11<sup>th</sup></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>National Kart Racing 2017</td>
                                                            <td>3<sup>rd </sup>🥉</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td >Indian Karting Championship 2019</td>
                                                            <td>11<sup>th</sup></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="achievement-body">
                                    {/* <p className="achievements ach-text">ACHIEVEMENTS</p> */}
                                    <div className="achievement-container">
                                        <div className="achievement-row">
                                            <div className="achievement-col">
                                                <img src={home2} alt="Achievements 1" className='ach-img' /><br />
                                                <p className="supra ach-text">SUPRA</p>
                                            </div>
                                            <div className="achievement-col" id="tablee">
                                                <table className="table table-borderless  table-dark" >
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="cols">RACE</th>
                                                            <th scope="col">RANK</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>SAE INDIA SUPRA</td>
                                                            <td>37 <sup>th</sup></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev width-auto" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next width-auto" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Achievements