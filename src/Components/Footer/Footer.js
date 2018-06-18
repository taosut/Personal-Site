import React from 'react';
import './Footer.css'
import Logo from "../../IMG/Mlogo.png";
import Facebook from '../../IMG/facebook.png'
import Instagram from '../../IMG/Instagram.png'
import Github from "../../IMG/Github.png"
import LinkedIN from "../../IMG/linkedin-button.png"
import Call from "../../IMG/phone.png"
import Mail from "../../IMG/mail.png"
import Copyright from '../../IMG/copyright.png'

import Zoom from 'react-reveal'
import Gegevens from '../../Components/Gegevens/Gegevens'
const Footer = (props) => {

    return (
     <div className="Footer">
         <div className="container mt-5">
             <Zoom>
            <div className="text-center justify-content">

             <img className="FooterLogo mb-1" src={Logo} alt="Enes LOGO"/>
            <p className="NOM">Excellence is the</p>
                <p className="NOM">Gradual result of</p>
                <p className="NOM">always striving to do</p>
                <p className="NOM">better</p>
            </div>
                <div className="IconRow mt-4">
                    <a href={Gegevens.facebook.url}>   <div className="Icon"><img  className="FooterIcon" src={Facebook} alt="Facebook"/></div></a>
                    <a href={Gegevens.instagram.url}> <div className="Icon"><img  className="FooterIcon" src={Instagram} alt="Instagram"/></div></a>
                    <a href={Gegevens.Github.url}> <div className="Icon"><img  className="FooterIcon" src={Github} alt="Github"/></div></a>
                    <a href={Gegevens.linkedin.url}> <div className="Icon"><img  className="FooterIcon" src={LinkedIN} alt="Linkedin"/></div></a>
                    <a href={"tel:"+Gegevens.phone}> <div className="Icon"><img  className="FooterIcon" src={Call} alt="Phone"/></div></a>
                    <a href={"mailto:" + Gegevens.email}> <div className="Icon"><img  className="FooterIcon" src={Mail} alt="Mail"/></div></a>

                </div>
                <div className="text-center justify-content mt-5">
                    <p> created by <img className="Copyright" src={Copyright} alt="Copyright Enes Sagir"/> Enes Sagir</p>
                </div>
             </Zoom>
         </div>

     </div>
    )

};

export default Footer;
