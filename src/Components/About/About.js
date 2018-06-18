import React from 'react';
import './About.css'
import Layout from "../Layout/Layout";
import Enes from "../../IMG/me.png"
import Fade from "react-reveal"
import Typist from 'react-typist'

const About = () => {

    return (
        <div className="About">
            <Layout>
                <Fade duration={4000}>
                    <div className="CenterAbout">
                        <img className="AboutIMG my-3" src={Enes} alt="Enes Sagir"/>
                    </div>
                    <div className="CenterAbout">
                        <h3 className="text-white text-center RobotoBOLD mb-3">About</h3>
                    </div>
                    <Typist cursor={{show: false}}>
                    <p className="text-center RobotoBOLD NOM">
                        I started designing in 2012 in Photoshop making Youtube Banners and making 3D Logos in Cinema4D.

                    </p>
                    <p className="text-center RobotoBOLD NOM">
                        I started web developement in 2016 and immediately i fell in love with it!,
                        I am always developing the best i can and to produce something beneficial to my customers.
                    </p>
                    </Typist>
                </Fade>
            </Layout>
        </div>
    )

};

export default About;
