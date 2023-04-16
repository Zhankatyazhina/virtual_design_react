import React from 'react'
import logo from '../../Assets/images/Standard Collection 13.png';
import facebook from '../../Assets/images/facebook.png';
import instagram from '../../Assets/images/instagram.png';
import twitter from '../../Assets/images/twitter.png';
import pinterest from '../../Assets/images/pinterest.png';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__top">

                    <div className="footer__site-info">
                        <div className="footer__logo">
                            <img src={logo} alt="logo" />
                            <h3>Zone.</h3>
                        </div>
                        <p className="footer__address">Dhaka, Bangladesh</p>
                        <p className="footer__index">0943833399</p>
                        <p className="footer__email">support@zone.com</p>
                        <ul className="footer__socials">
                            <li><img src={facebook} alt="" /></li>
                            <li><img src={twitter} alt="" /></li>
                            <li><img src={instagram} alt="" /></li>
                            <li><img src={pinterest} alt="" /></li>
                        </ul>

                    </div>

                    <div className="footer__other-info">
                        <p>Service</p>
                        <p>Order Management</p>
                        <p>Social Assistant</p>
                        <p>Crypto Platform </p>
                        <p>Analyzer of the News</p>
                    </div>

                    <div className="footer__other-info">
                        <p>Company</p>
                        <p>About Us</p>
                        <p>News</p>
                        <p>Our trusted partner </p>
                        <p>New users FAQ</p>
                    </div>

                    <div className="footer__other-info">
                        <p>Supports</p>
                        <p>Help center</p>
                        <p>Feedback</p>
                        <p>Contact us</p>
                        <p>Terms condition</p>
                    </div>

                    <div className="footer__other-info">
                        <p>Resources</p>
                        <p>Download app</p>
                        <p>Blog</p>
                        <p>What's new</p>
                        <p>Sitemap</p>
                    </div>

                </div>

                <div className="footer__bottom">
                    <p className="footer__reserve">© 2021 Zone. - All rights reserved.</p>
                    <ul className="footer__rules">
                        <li className="footer__rule">Privacy</li>
                        <li className="footer__rule">Security</li>
                        <li className="footer__rule">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
