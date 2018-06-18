import React from 'react';
import './Card.css'
import Laravel from '../../IMG/Laravel.png'
import Design from "../../IMG/Design.png"
import ReactLogo from "../../IMG/React.png"

const Card = (props) => {

    const style = {
        width:"auto"
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mx-lg-auto mx-md-auto mb-5  offset-md-3">
                <div className="card CCard" style={style}>
                    <img className="card-img customCard " src={Design} alt="Design"/>
                    <div className="card-body">
                        <h5 className="card-title text-green text-center RobotoBOLD">Custom Design</h5>
                        <p className="card-text text-center RobotoBOLD NOM">Building</p>
                        <p className="card-text text-center RobotoBOLD NOM" >Beautifull Responsive</p>
                        <p className="card-text text-center RobotoBOLD NOM mb-1" >Websites</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mx-lg-auto mx-md-auto mb-5  offset-md-3">
                <div className="card CCard" style={style}>
                    <img className="card-img customCard " src={Laravel} alt="Design"/>
                    <div className="card-body">
                        <h5 className="card-title text-green text-center RobotoBOLD">Custom Design</h5>
                        <p className="card-text text-center RobotoBOLD NOM">Building</p>
                        <p className="card-text text-center RobotoBOLD NOM" >Secure Custom</p>
                        <p className="card-text text-center RobotoBOLD NOM mb-1" >Backends</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mx-lg-auto mx-md-auto mb-5  offset-md-3">
                <div className="card CCard" style={style}>
                    <img className="card-img customCard " src={ReactLogo} alt="Design"/>
                    <div className="card-body">
                        <h5 className="card-title text-green text-center RobotoBOLD">Custom Design</h5>
                        <p className="card-text text-center RobotoBOLD NOM">Building</p>
                        <p className="card-text text-center RobotoBOLD NOM" >Beautifull Responsive</p>
                        <p className="card-text text-center RobotoBOLD NOM mb-1" >Websites</p>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )

};

export default Card;
