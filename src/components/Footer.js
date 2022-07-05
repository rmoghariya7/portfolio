import "./footer.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>123 Bunglows</p>
              <p>Gujarat</p>
            </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                +91-1234567890
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                abc@gmail.com
              </h4>
            </div>
          </div>
        
        <div className="right">
          <h4>About The Company</h4>
          <p>This is me <span>Moghariya Rahul</span>.CEO & Founder of Sillycon Valley. I enjoy discussing new Projects and Design Chellenges.</p>
          <div className="social">
          <FaFacebook
                  size={30}
                  style={{ color: "white", marginRight: "1rem" }}
                  />
          <FaTwitter
                  size={30}
                  style={{ color: "white", marginRight: "1rem" }}
                  />
          <FaLinkedin
                  size={30}
                  style={{ color: "white", marginRight: "1rem" }}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
