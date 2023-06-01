import React from "react";
import { Link } from "react-router-dom";

import img3 from "../assets/images/phone-flip-solid.svg"
import img4 from "../assets/images/location-dot-solid.svg"
import img5 from "../assets/images/twitter.svg"
import img6 from "../assets/images/facebook-f.svg"
import img7 from "../assets/images/instagram.svg"
import img8 from "../assets/images/linkedin-in.svg"

function Footer () {
    return (
        <footer>
          <div className="container" id="contact">
            <div className="row">
                <div className="col-md-6">
                    <h4>Contact</h4>
                    <img src={img3} alt="" />
                    <span>0662 562 856, 0555 274 105</span>
                    <p className="email"><span className="email-a">@</span>SkillBuilder@gmail.com</p>
                    <img src={img4} alt="" />
                    <span>Cite Said Hamdine 195/574 bt 16 local n 13- algeria</span>
                </div>
                <div className="col-md-6">
                    <h4>Subscribe to our newsletter</h4>
                    <p>For announcements and exclusive deals</p>
                    <div className="input-group">
                        <input type="email" className="form-control input-case" placeholder="Input your email" />
                        <div className="input-group-append">
                            <button className="btn special" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <p>SkillBuilder © 2023 . all rights reserved</p>
                </div>
                <div className="col-md-6 social-icons">
                    <Link to="/notfound" target="_blank"><img className="social-icon lkd" src={img8} alt="" /></Link>
                    <Link to="/notfound" target="_blank"><img className="social-icon" src={img7} alt="" /></Link>
                    <Link to="/notfound" target="_blank"><img className="social-icon" src={img5} alt="" /></Link>
                    <Link to="/notfound" target="_blank"><img className="social-icon fb" src={img6} alt="" /></Link>
                </div>
            </div>
         </div>

        </footer>
        
    );
     
}

export default Footer;