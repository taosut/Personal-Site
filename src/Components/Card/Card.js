import React from 'react';
import './Card.css'
import Design from 'react-icons/lib/fa/paint-brush'
import Develop from 'react-icons/lib/fa/laptop'
import Maintain from 'react-icons/lib/go/tools'
import {Fade} from "react-reveal";


const Card = (props) => {

    const style = {
        width: "auto"
    };
    return (
        <div className="container-fluid ">
            <div className="row mt-5">
                <Fade left>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 mb-5 my-auto mx-auto mt-5">
                    <div className="card CCard shadow" style={style}>
                        <div className="svg-logo">
                            <Design color="white" size={80}/>
                        </div>
                        <div className="card-body ">
                            <h4 className="card-title text-green text-center RobotoBOLD">1. Design</h4>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade up>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 mb-5 my-auto mx-auto mt-5">
                    <div className="card CCard shadow" style={style}>
                        <div className="svg-logo">
                            <Develop color="white" size={80}/>
                        </div>
                        <div className="card-body ">
                            <h4 className="card-title text-green text-center RobotoBOLD">2. Develop</h4>

                        </div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 mb-5 my-auto mx-auto mt-5">
                    <div className="card CCard shadow" style={style}>
                        <div className="svg-logo">
                            <Maintain color="white" size={80}/>
                        </div>
                        <div className="card-body ">
                            <h4 className="card-title text-green text-center RobotoBOLD">4. Maintain</h4>

                        </div>
                    </div>
                </div>
                </Fade>

            </div>
        </div>


    )

};

export default Card;
