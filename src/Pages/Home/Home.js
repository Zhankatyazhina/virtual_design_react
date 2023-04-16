import React from 'react';
import pause from '../../Assets/images/Pause.png';
import image from '../../Assets/images/home-content.png';

export const Home = () => {
  return (
    <section className="home">
        <div className="container">
            <div className="home__inner">
                <div className="home__left">
                    <h1 className="home__title">Virtual Reality <br/> Business Solutions</h1>
                    <p className="home__text">We have over 15 year exprience in business consultting arena. We have over <br/> 15 year exprience in business consultting arena and artficial intelligence.</p>
                    <div className="home__clicks">
                        <button className="home__btn">Join Us</button>
                        <img src={pause} alt="pause" />
                        <a className="home__link" href="#">Watch video</a>
                    </div>
                </div>

                <div className="home__right">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}
