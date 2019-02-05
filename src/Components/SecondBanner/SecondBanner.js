import React from 'react';
import './SecondBanner.css'
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
const HeadBanner = (props) => {
    const style = {
        margin: "0",
        backgroundColor: 'white',
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
            <h4 className="RobotoBOLD text-center text-green mb-5">Full-Stack Web Developer</h4>
            <Layout>

            <Card/>

         </Layout>
        </div>

    )

};

export default HeadBanner;
