import React from 'react'
import {BsSkype , BsLinkedin , BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import mem1 from '../../Assets/images/mem1.png';
import mem2 from '../../Assets/images/mem2.png';
import mem3 from '../../Assets/images/mem3.png';
import mem4 from '../../Assets/images/mem4.png';


export const Team = () => {
  return (
    <section className="team">
        <div className="container">
            <h2 className="team__title">Met Our Team</h2>
            <p className="team__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

            <div className="team__members">
                <div className="team__mem">
                    <img className="team__mem-img" src={mem1} alt="mem1" />
                    <h3 className="team__mem-name">Sunny Khan</h3>
                    <p className="team__mem-position">Executive officer</p>
                    
                    <ul className="team__mem-socials">
                        <li className="team__mem-social"><BsSkype/></li>
                        <li className="team__mem-social"><BsLinkedin/></li>
                        <li className="team__mem-social"><AiFillTwitterCircle/></li>
                        <li className="team__mem-social"><BsFacebook/></li>
                    </ul>
                    
                </div>

                <div className="team__mem">
                    <img className="team__mem-img" src={mem2} alt="mem2" />
                    <h3 className="team__mem-name">Alina Jesia</h3>
                    <p className="team__mem-position">UX/UI DESIGNER</p>
                    
                    <ul className="team__mem-socials">
                        <li className="team__mem-social"><BsSkype/></li>
                        <li className="team__mem-social"><BsLinkedin/></li>
                        <li className="team__mem-social"><AiFillTwitterCircle/></li>
                        <li className="team__mem-social"><BsFacebook/></li>
                    </ul>
                    
                </div>

                <div className="team__mem">
                    <img  className="team__mem-img" src={mem3} alt="mem3" />
                    <h3 className="team__mem-name">Alex Sohag</h3>
                    <p className="team__mem-position">BUSINESS DEVELOPMENT</p>
                    
                    <ul className="team__mem-socials">
                        <li className="team__mem-social"><BsSkype/></li>
                        <li className="team__mem-social"><BsLinkedin/></li>
                        <li className="team__mem-social"><AiFillTwitterCircle/></li>
                        <li className="team__mem-social"><BsFacebook/></li>
                    </ul>
                    
                </div>

                <div className="team__mem">
                    <img className="team__mem-img" src={mem4} alt="mem4" />
                    <h3 className="team__mem-name">Afroza Mou</h3>
                    <p className="team__mem-position">Head of marketing</p>
                    
                    <ul className="team__mem-socials">
                        <li className="team__mem-social"><BsSkype/></li>
                        <li className="team__mem-social"><BsLinkedin/></li>
                        <li className="team__mem-social"><AiFillTwitterCircle/></li>
                        <li className="team__mem-social"><BsFacebook/></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
