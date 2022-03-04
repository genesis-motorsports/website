import React from 'react'
import "./Sponsors.css";
import ansys from "../images/sponsors/ansyswhite.png";
import solidworks from "../images/sponsors/solidworks.png";
import redbull from "../images/sponsors/redbull.png";
import altair from "../images/sponsors/altair.png";
import atc from "../images/sponsors/atc.png";
import akashenterprises from "../images/sponsors/akashenterprises.png";
import endurance from "../images/sponsors/endurance.png";
import k7engineers from "../images/sponsors/k7engineers.png";
import spicy13 from "../images/sponsors/spicy13.png";
import ps from "../images/sponsors/ps.png";
import carbonchromecustoms from "../images/sponsors/carbonchromecustoms.png";
import dhananjayengineering from "../images/sponsors/dhananjayengineering.png";
import shashikantfurnitures from "../images/sponsors/shashikantfurnitures.png";
import trimurtiworks from "../images/sponsors/trimurtiworks.png";
import toloromenterprises from "../images/sponsors/toloromenterprises.png";
import bigbull from "../images/sponsors/bigbull.png";
import deck from "../images/sponsors/deck.png";
// import arontech from "../images/sponsors/arontech.png";

// style={{filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg) brightness(106%) contrast(101%)"}}

const Sponsors = (props) => {
    const {sponsorView, handleSponsor} = props
    return (
        <div className='outer-home'>
            <div className="image-overlay">
                <div className="container" id={`${props.ids.sponsors}`}>
                <h4 className="sponsor-heading">OUR SPONSORS</h4>
                    <div className="sponsor-container">
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={ansys} className="sponsor-img" alt="ansys" />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={solidworks} className="sponsor-img" alt="solidworks" width={50}/>
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={redbull} className="sponsor-img" alt="redbull" />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={altair} className="sponsor-img" alt="altair" />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={atc} className="sponsor-img" alt="atc" />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={akashenterprises} className="sponsor-img" alt="akashenterprises" />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={endurance} className="sponsor-img" alt="endurance"  />
                            </a>
                        </div>
                        <div className="sponsor-item">
                            <a href="/">
                                <img src={k7engineers} className="sponsor-img" alt="k7engineers" />
                            </a>
                        </div>
                        {sponsorView === "View Less" ? <div className="hidden">
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={spicy13} className="sponsor-img" alt="spicy13" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={ps} className="sponsor-img" alt="ps" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={carbonchromecustoms} className="sponsor-img" alt="carbonchromecustoms" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={dhananjayengineering} className="sponsor-img" alt="dhananjayengineering" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={shashikantfurnitures} className="sponsor-img" alt="shashikantfurnitures" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={trimurtiworks} className="sponsor-img sponsor-item-100" alt="trimurtiworks" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={toloromenterprises} className="sponsor-img" alt="toloromenterprises" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={bigbull} className="sponsor-img" alt="bigbull" />
                                </a>
                            </div>
                            <div className="sponsor-item">
                                <a href="/">
                                    <img src={deck} className="sponsor-img sponsor-item-100" alt="deck" />
                                </a>
                            </div>
                        </div> : ""}
                        {/* <div className="sponsor-item">
                            <a href="/">
                            <img src={arontech} className="sponsor-img" alt="arontech" />
                            </a>
                        </div> */}
                    </div>
                    <div className="view-more">
                        {sponsorView === "View Less" ? <a href="#sponsors"><p onClick={handleSponsor}>{sponsorView} <span className='down-arrow'> &nbsp; &#8743;</span></p></a> : <p onClick={handleSponsor}>{sponsorView} <span className='down-arrow'> ...</span></p>}
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Sponsors