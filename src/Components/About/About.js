import React from 'react';
import './About.css'
import Layout from "../Layout/Layout";
import Enes from 'react-icons/lib/fa/user-secret'
import Fade from "react-reveal"

const About = () => {

    return (
        <div className="About Gradients">
            <Layout>
                <Fade>
                    <div className="CenterAbout">
                        <Enes size={80} className={'my-3'}/>
                    </div>
                    <div className="CenterAbout">
                        <h3 className="text-white text-center RobotoBOLD mb-3">About</h3>
                    </div>
                </Fade>

                    <div className="CenterAbout">
                    <Fade up>
                        <p className="text-center RobotoBOLD NOM w-50">
                            I started designing in 2012 in Photoshop making YouTube Banners and making 3D Logos in Cinema4D.

                        </p>
                    </Fade>
                    </div>
                        <div className="CenterAbout">
                            <Fade up>
                        <p className="text-center RobotoBOLD w-50">
                            I started web development in 2016 and immediately fell in love with it! I am always developing
                            the best I can and to produce something beneficial to my customers.
                        </p>
                            </Fade>
                        </div>

            </Layout>
        </div>
    )

};

export default About;
