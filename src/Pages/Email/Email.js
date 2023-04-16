import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';

export const Email = () => {
  return (
    <section className="email">
        <div className="container">
            <div className="email__inner">
                <h2 className="email__title">Subscribe to get the Latest News</h2>
                <p className="email__text">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                <div className="email__input-sub">
                    <input className="email__input" type="text" placeholder='Enter your email address' />
                    <button className="email__btn">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}
