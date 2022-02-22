import React from "react";
// import aboutus from "../images/aboutus.jpg";
import "./About.css";

const About = (props) => {
  return (
    <div className="outer-home">
      <div className="about-body">
        <div className="image_overlay">
          <div className="container" id={`${props.ids.about}`}>
            <div className="about-footer-col">
              {" "}
              <h4 className="about-txt">ABOUT US</h4>
            </div>
            <p className="abt-txt">
              GENESIS 16 MOTORSPORTS is a collegiate SAE SUPRA Team which
              conceptualizes, designs, manufactures and test a formula student
              vehicle that competes in dynamic and static event in SAE INDIA
              SUPRA Event. Our teams is fully professionalized in designing,
              modelling, manufacturing, marketing, funding. etc. Our motto is to
              build a fully functional formula student car which can withstand
              in event and gain maximum points.
            </p>
            <div className="abt-row">
              <div className="about-footer-col" data-aos="fade-left" data-aos-duration="1000">
                <h4>Struggle</h4>
                <p className="abt-txt">
                The struggle is inextricably tied to the end. It takes willingness and strength to keep moving forward until your mission and vision. which appear impossible at any given time, become reality. This journey of Team Genesis 16 Motorsports was full of ups and downs, but what allowed us to continue despite these difficulties is the words of motivation of our visionary.
                </p>
              </div>
              <div className="about-footer-col" data-aos="fade-down" data-aos-duration="1000">
                <h4>Sacrifice</h4>
                <p className="abt-txt">
                Sacrifices are part of life and are not meant to be anything to regret. we believe in sacrifice for the betterment of ourselves. Every day a decision is made, and the decision is considered a sacrifice. Teammates who put themselves on the line and sacrifice their time and capital for the greater good of the team.
                </p>
              </div>
              <div className="about-footer-col" data-aos="fade-right" data-aos-duration="1000">
                <h4>Success</h4>
                <p className="abt-txt">
                The struggle is inextricably tied to the end. It takes willingness and strength to keep moving forward until your mission and vision. which appear impossible at any given time, become reality. This journey of Team Genesis 16 Motorsports was full of ups and downs, but what allowed us to continue despite these difficulties is the words of motivation of our visionary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default About;
