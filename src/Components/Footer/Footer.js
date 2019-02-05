import React from 'react';
import './Footer.css'
import Logo from "../../IMG/Mlogo.png";
import Linkedin from 'react-icons/lib/fa/linkedin-square'
import Github from 'react-icons/lib/fa/github'
import Phone from 'react-icons/lib/fa/mobile'
import Email from 'react-icons/lib/ti/mail'
import Copyright from 'react-icons/lib/fa/copyright'
import Zoom from 'react-reveal'
import Gegevens from '../../Components/Gegevens/Gegevens'
const Footer = (props) => {

    return (
     <div className="Footer Gradients">
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
                    <a href={Gegevens.linkedin.url}> <div className="Icon FooterIcon"><Linkedin  color="white" size={35}/></div></a>
                    <a href={Gegevens.Github.url}> <div className="Icon FooterIcon"><Github color="white" size={35}/></div></a>
                    <a href={"tel:"+Gegevens.phone}> <div className="Icon FooterIcon"><Phone  color="white" size={35}/></div></a>
                    <a href={"mailto:" + Gegevens.email}> <div className="Icon FooterIcon"><Email  color="white" size={35}/> </div></a>

                </div>
                <div className="text-center justify-content mt-5">
                    <p> created by <Copyright color="white" size={30}/> Enes Sagir</p>
                </div>
             </Zoom>
         </div>

     </div>
    )

};

export default Footer;
