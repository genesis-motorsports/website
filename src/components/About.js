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
            GENESIS 16 MOTORSPORTS is a collegiate SAE SUPRA Team that conceptualizes, designs, manufactures and test a formula student vehicle that competes in a dynamic and static event in the SAE INDIA SUPRA Event. Our team is fully professionalized in designing, modelling, manufacturing, marketing, funding. etc. Our motto is to build a fully functional formula student car that can withstand an event and gain maximum points.
            </p>
            <div className="abt-row">
              <div className="about-footer-col" data-aos="fade-left" data-aos-duration="1000">
                <h4 className="f-size-20px">STRUGGLE</h4>
                <p className="abt-txt">
                The struggle is inextricably tied to the end. It takes willingness and strength to keep moving forward until your mission and vision, which appear impossible at any given time, become reality. This journey of Team Genesis 16 Motorsports was full of ups and downs, but what allowed us to continue despite these difficulties is the words of motivation of our visionary.
                </p>
              </div>
              <div className="about-footer-col" data-aos="fade-down" data-aos-duration="1000">
                <h4 className="f-size-20px">SACRIFICE</h4>
                <p className="abt-txt">
                Sacrifices are a part of life and are not meant to be anything to regret. We believe in sacrifice for the betterment of ourselves. Every day a decision is made, and the decision is considered a sacrifice. Teammates who put themselves on the line, sacrifice their time and capital for the greater good of the team.
                </p>
              </div>
              <div className="about-footer-col" data-aos="fade-right" data-aos-duration="1000">
                <h4 className="f-size-20px">SUCCESS</h4>
                <p className="abt-txt">
                Success is “The accomplishment of aim or purpose”. Success could be considered as the fuel on which the whole world functions efficiently. The perspective of success is different for every individual. At Genesis 16 Motorsports, we believe that success is the byproduct of hardwork and dedication. Each team member puts in the best foot forward strives ahead.
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
