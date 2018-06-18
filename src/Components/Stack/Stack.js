import React from 'react';
import './Stack.css'
import FEnd from '../../IMG/app-development.png'
import forest from '../../IMG/Boss.png'
import BENd from '../../IMG/coding.png'
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
const Stack = (props) => {
    return (
        <div style={style} className="jumbotron CustomJUmbo">
        <div className="container">
            <div className="Section Stack shadow">
            <div className="row">

                <div className="col-12 col-md-6 col-sm-6 col-lg-6 border-right">
                    <div className="text-center justify-content">
                    <img className="StackLogo mx-auto my-5" src={FEnd} alt=""/>
                        <h2 className="RobotoBOLD color-black mb-5">Front-end Developer</h2>
                        <p className="Roboto NOM">I love clean , simple , out</p>
                           <p className="Roboto NOM"> of the box designs ,</p>
                           <p className="Roboto NOM"> Let my inspiration takes </p>
                           <p className="Roboto NOM"> itself!</p>

                        <h4 className="text-green RobotoBOLD my-5">Languages I Speak:</h4>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <h4 className="text-green RobotoBOLD my-5">Frameworks / Libraries:</h4>
                        <p>SASS</p>
                        <p>Jquery</p>
                        <p>ReactJS</p>
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-6 border-top">
                    <div className="text-center justify-content">
                        <img className="StackLogo mx-auto my-5" src={BENd} alt=""/>
                        <h2 className="RobotoBOLD color-black mb-5">Back-end Developer</h2>
                        <p className="Roboto NOM">I love using Laravel to</p>
                        <p className="Roboto NOM">code and produce clean</p>
                        <p className="Roboto NOM">and structured code</p>
                        <p className="Roboto NOM">Bringing ideas to life!</p>

                        <h4 className="text-green RobotoBOLD my-4">Languages I Speak:</h4>
                        <p>PHP</p>

                        <h4 className="text-green RobotoBOLD mt-5 mb-4">Frameworks / Libraries:</h4>
                        <p>Laravel</p>
                        <h4 className="text-green RobotoBOLD my-5">Dev Tools:</h4>
                        <p>Github</p>
                        <p>BitBucket</p>
                        <p>NPM</p>
                        <p>Composer</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Stack;
