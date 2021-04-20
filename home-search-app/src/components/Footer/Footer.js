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
                        <b>ABOUT</b>
                        <div class="ftQV">
                            <li>How we work</li>
                            <li>Our News Room</li>
                            <li>Company Luxes</li>
                            <li>Career with us</li>
                            <li>What you speak about us?</li>
                        </div>
                    </section>
                    <section class="footServ">
                        <b>Our Community</b>
                        <div class="ftSL">
                            <li>Help Center for Cancellations</li>
                            <li>Guest Referals</li>
                            <li>Gift Vouchers</li>
                            <li>Our Associates</li>
                            <li>Resource Center</li>
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
                        <p><small>&copy; Copyright 2021, <strong class="cpyStrg">Easy Homes Inc.,</strong><pre>    </pre></small></p>
                        <div class="lastLine">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                        </div>
                    </div>
                </div>
            </div> 
    </footer> 
    );
  }
}

export default Footer;