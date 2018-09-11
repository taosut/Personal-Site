import React from 'react';
import './Stack.css'
import Code from 'react-icons/lib/fa/code'
import Pen from 'react-icons/lib/fa/pencil'
import Zoom from 'react-reveal';

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
const Stack = (props) => {
    return (
        <div style={style} className="jumbotron CustomJUmbo">
            <div className="container">
                <div className="Section Stack shadow">
                    <div className="row">

                        <div className="col-12 col-md-6 col-sm-6 col-lg-6 border-right">
                            <div className="text-center justify-content">
                                <div className="StackLogo mx-auto my-5"><Pen color="green" size={90}/></div>
                                <Zoom>
                                <h2 className="RobotoBOLD color-black mb-5">Front-end Developer</h2>



                                <h4 className="text-green RobotoBOLD my-5">Languages I Speak:</h4>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                                <h4 className="text-green RobotoBOLD my-5">Frameworks / Libraries:</h4>
                                <p>ReactJS</p>
                                <p>Redux</p>
                                <p>Bootstrap</p>
                                <p>SASS</p>
                                <p>Jquery</p>
                                </Zoom>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6 col-lg-6 border-top">
                            <div className="text-center justify-content">
                                <div className="StackLogo mx-auto my-5"><Code color="green" size={90}/></div>
                                <Zoom>
                                <h2 className="RobotoBOLD color-black mb-5">Back-end Developer</h2>

                                <h4 className="text-green RobotoBOLD my-4">Languages I Speak:</h4>
                                <p>PHP</p>
                                <p>NodeJS</p>
                                <h4 className="text-green RobotoBOLD mt-5 mb-4">Frameworks / Libraries:</h4>
                                <p>Laravel</p>
                                <p>ExpressJS</p>
                                <h4 className="text-green RobotoBOLD my-5">Dev Tools:</h4>
                                <p>Github</p>
                                <p>BitBucket</p>
                                <p>NPM</p>
                                <p>Composer</p>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Stack;
