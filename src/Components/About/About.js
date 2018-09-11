import React from 'react';
import './About.css'
import Layout from "../Layout/Layout";
import Enes from "../../IMG/me.jpg"
import Fade from "react-reveal"

const About = () => {

    return (
        <div className="About Gradients">
            <Layout>
                <Fade>
                    <div className="CenterAbout">
                        <img className="AboutIMG my-3" src={Enes} alt="Enes Sagir"/>
                    </div>
                    <div className="CenterAbout">
                        <h3 className="text-white text-center RobotoBOLD mb-3">About</h3>
                    </div>
                    <Fade up>
                        <p className="text-center RobotoBOLD NOM">
                            I started designing in 2012 in Photoshop making YouTube Banners and making 3D Logos in Cinema4D.

                        </p>
                        <p className="text-center RobotoBOLD">
                            I started web development in 2016 and immediately fell in love with it! I am always developing
                            the best I can and to produce something beneficial to my customers.
                        </p>
                    </Fade>

                </Fade>
            </Layout>
        </div>
    )

};

export default About;
