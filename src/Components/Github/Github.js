import React from 'react';
import './Github.css'
import Logo from "../../IMG/logo.png";
const Github = (props) => {
    const style = {
        width:"auto"
    };
    return (
        <a className="customAhref" href={props.link}>
        <div className="card CustomGithub shadow" style={style}>
            <img className="card-img customCard " src={Logo} alt="Design"/>
            <div className="card-body">
                <h5 className="card-title text-center RobotoBOLD">{props.name}</h5>
            </div>
        </div>
        </a>
    )

};

export default Github;
