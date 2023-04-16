import React from 'react';
import cus1 from '../../Assets/images/customer-1.png';
import cus2 from '../../Assets/images/customer-2.png';


export const Customer = () => {
  return (
    <div className="customer">
        <div className="container">
            <section className="customer__first-row">
                <img src={cus1} alt="cus1" />
                <div className="customer__needs">
                    <h2 className="customer__title">We complete every projects <br/>
                    extra care as customer need</h2>

                    <p className="customer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/> non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/> scelerisque in. orem  ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/> error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                    </p>

                    <button className="customer__btn">Read more</button>
                </div>
            </section>

            <section className="customer__second-row">
                <div className="customer__needs">
                    <h2 className="customer__title">We complete every projects <br/>
                    extra care as customer need</h2>

                    <p className="customer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/> non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/> scelerisque in. orem  ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/> eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, <br/> error. Tempora odit laborum iure inventore possimus laboriosam qui nam. 
                    </p>

                    <button className="customer__btn">Read more</button>
                </div>
                <img src={cus2} alt="cus2" />
            </section>

            
        </div>
    </div>
  )
}
