import React from 'react';
import Fade from 'react-reveal';
import Typist from 'react-typist'
import Banner from "../../IMG/SiteBanner.jpg";
import Logo from "../../IMG/Mlogo.png";
import Linkedin from 'react-icons/lib/fa/linkedin-square'
import Github from 'react-icons/lib/fa/github'
import Phone from 'react-icons/lib/fa/mobile'
import Email from 'react-icons/lib/ti/mail'
import Gegevens from '../../Components/Gegevens/Gegevens'
import "./HeadBanner.css";

const HeadBanner = (props) => {


    const style = {
        margin: "0",
        backgroundImage: `url(${Banner})`,
        backgroundPositionY: "center",
        backgroundPositionX: "center",
        backgroundRepeat: 'no-repeat',
        width: "auto",
        height: "100%",
        minHeight: "400px",
        backgroundSize: "cover",


    };
    return (
        <div style={style} className="jumbotron">
            <Fade>
            <div className="container text-white">

                <div className="mainLogo">
                    <img className="LogoFluid mb-3" src={Logo} alt=""/>
                </div>
                <Typist className="displayBlock" cursor={{show: false}} avgTypingSpeed={15000}>
                    <div className="text-center"><h2 className="RobotoBOLD">Welcome</h2></div>
                    <Typist.Delay ms={300} />
                    <div className="text-center"><h1 className="RobotoBOLD">My name is Enes Sagir</h1></div>
                    <Typist.Delay ms={100} />
                    <div className="text-center"><p className="RobotoBOLD">I'm a web developer based in Rotterdam.</p></div>


                </Typist>
                <Fade>
                    <div className="text-center justify-content">
                        <a href={Gegevens.linkedin.url}><div className="headerIcon"><div className="Header"><Linkedin color="white" size={40}/></div></div></a>
                        <a href={Gegevens.Github.url}> <div className="headerIcon"><div className="Header"><Github color="white" size={40}/> </div></div></a>
                        <a href={"tel:" + Gegevens.phone}> <div className="headerIcon"><div className="Header"><Phone color="white" size={40}/></div></div></a>
                        <a href={"mailto:" + Gegevens.email}> <div className="headerIcon"><div className="Header"><Email color="white" size={40}/></div></div></a>

                    </div>

                </Fade>
            </div>
            </Fade>

        </div>
    )

};

export default HeadBanner;
