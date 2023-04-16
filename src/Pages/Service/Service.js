import React from 'react'
import im1 from '../../Assets/images/one-s.png'
import im2 from '../../Assets/images/two-s.png'
import im3 from '../../Assets/images/three-s.png'
import im4 from '../../Assets/images/four-s.png'
import im5 from '../../Assets/images/five-s.png'
import im6 from '../../Assets/images/six-s.png'

export const Service = () => {
  return (
    <section className="service">
        <div className="container">
            <div className="service__inner">
                <h1 className="service__title">Our Service</h1>
                <p className="service__text">We turn information into actionable insights We work to understand your issues <br/>
                and are driven to ask better questions in the pursuit of making work.</p>

                <div className="service__list">

                    <div className="service__item">
                        <img className="service__item-img" src={im1} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                    <div className="service__item">
                    <img className="service__item-img" src={im2} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                    <div className="service__item">
                    <img className="service__item-img" src={im3} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                </div>

                <div className="service__list2">
                    <div className="service__item">
                    <img className="service__item-img" src={im4} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                    <div className="service__item">
                    <img className="service__item-img" src={im5} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                    <div className="service__item">
                    <img className="service__item-img" src={im6} alt="" />
                        <h3 className="service__item-title">Order Management</h3>
                        <p className="service__item-text">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a className="service__item-more" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
