import React from 'react'
import './Home2.css';
// import home1 from "../images/home1.jpg";

const Home2 = (props) => {
    return (
        <div className="outer-home">
            <div className='home-container' id={`${props.ids.home}`}>
                <div className="section-top">
                    <div className="content">
                        <h1>genesis16motorsports</h1>
                        <h2>struggle|sacrifice|success</h2>
                    </div>
                </div>
                {/* <div>
                <img src={home1} alt="First"/>
            </div> */}
            </div>
        </div>
    )
}

export default Home2