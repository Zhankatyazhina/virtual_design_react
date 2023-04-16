import React from 'react'
import logo from '../../Assets/images/Standard Collection 13.png';

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">

                <div className="header__logo">
                    <img src={logo} alt="logo" />
                    <h3>Zone.</h3>
                </div>

                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">Home</li>
                        <li className="header__item">About Us</li>
                        <li className="header__item">Service</li>
                        <li className="header__item">Pricing</li>
                        <li className="header__item">Blog</li>
                    </ul>

                    <button className="header__btn">Contact Us</button>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header;
