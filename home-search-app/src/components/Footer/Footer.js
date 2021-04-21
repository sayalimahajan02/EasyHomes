import React from "react";
import "./Footer.scss";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer class="ftr">    
            <div class="ftrbody"> 
                    <section class="footClnNw">
                        <b>Easy Homes</b>
                        <p>Leaders in the real estate industry send thousands of texts using our platform. After nearly a decade in text marketing, we’ve learned a thing or two about works and what doesn’t.</p>
                    </section>           
                    <section class="footQview">
                        <b>About</b>
                        <div class="ftQV">
                            <li>Know about us</li>
                            <li>News</li>
                            <li>Our Services</li>
                            <li>Careers</li>
                            <li>Your feed back</li>
                        </div>
                    </section>
                    <section class="footServ">
                        <b>Community</b>
                        <div class="ftSL">
                            <li>Cancellations</li>
                            <li>Help</li>
                            <li>Our Promo codes</li>
                            <li>Our Employees</li>
                            <li>Resources</li>
                        </div>
                    </section>
                    <section class="footCntct">
                        <b>Contact</b>
                        <p>Phone : +1 4567891230</p>
                        <p>Email : info@easyhomes.com</p>
                        <p>Fax : +1 567 789 8901</p>
                    </section>
                    
                </div>
            <div class="ftrtail">
                <div class="copyRights">
                    <div class="leftCR">
                        <pre><small>&copy; Copyright 2021, <strong class="cpyStrg">Easy Homes Inc.,</strong></small>    <b>  |  Privacy |  Services |  Terms and Conditions  </b>  </pre> 
                    </div>
                </div>
            </div> 
    </footer> 
    );
  }
}

export default Footer;