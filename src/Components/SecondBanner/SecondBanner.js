import React from 'react';
import './SecondBanner.css'
import Card from "../Card/Card";
import Zoom from 'react-reveal'
import Layout from "../Layout/Layout";
import forest from '../../IMG/Boss.png'
const HeadBanner = (props) => {
    const style = {
        margin: "0",
        backgroundImage: `url(${forest})`,
        backgroundColor: 'transparent',
        backgroundPositionY: "center",
        backgroundPositionX: "center",
        backgroundRepeat: 'no-repeat',
        width: "auto",
        height: "100%",
        minHeight: "400px",
        backgroundSize: "cover",


    };
    return (
        <div style={style} className="jumbotron CustomJUmbo">

            <h5 className="RobotoBOLD text-center text-green mb-5">Freelance Web Designer & Developing Custom Websites</h5>
            <Layout>
                <Zoom>
            <Card/>
                </Zoom>
         </Layout>
        </div>

    )

};

export default HeadBanner;
