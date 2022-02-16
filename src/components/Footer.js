import React from "react";
import "./Footer.css";
import footerlogo from "../images/logowhite.png"

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <img className="footer-logo" src={footerlogo} alt="Genesis16Motorsports"/>
              <br />
              <p className="footercompanyname">
                TeamGenesis16motorsports © 2022
              </p>
            </div>
            <div className="footer-col">
              <a href="https://goo.gl/maps/AZKqzHNc8F5BGCHG9" id="location" target="_blank" rel="noreferrer">
                <i
                  className="fa fa-map-marker"
                  id="iconscenter"
                  aria-hidden="true"
                ></i>
              </a>
              <p>
                <p>
                  <span>Dr. D.Y. Patil Educational Complex,</span>
                  <span style={{ position: "relative", textAlign: "left" }}>
                    {" "}
                    Akurdi, Pune - 411044
                  </span>
                  <span style={{ position: "relative", textAlign: "left" }}>
                    {" "}
                    Maharashtra, India
                  </span>
                </p>
              </p>

              <pre></pre>
              <br />
              <a href="mailto:genesis16motorsports@gmail.com" id="mail">
                <i
                  className="fa fa-envelope"
                  id="iconscenter"
                  aria-hidden="true"
                ></i>
              </a>
              <p className="mail">genesis16motorsports@gmail.com</p>
            </div>
            <div className="footer-col">
              <h4>For More</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/genesixteen"
                  target="_blank"
                  id="facebook" rel="noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://instagram.com/genesis16_motorsports?utm_medium=copy_link"
                  target="_blank"
                  id="instagram" rel="noreferrer"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/genesis-16-motorsports-india/mycompany/?viewAsMember=true"
                  target="_blank"
                  id="linkedin" rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCZyJYqtoMgI3B5-6PJrrOow/featured"
                  target="_blank"
                  id="youtube" rel="noreferrer"
                >
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
