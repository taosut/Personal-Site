import React from 'react';
import './Project.css'
const Project = (props) => {
    const image = require('../../IMG/'+ props.image);
    const style = {
        backgroundImage:`url(${image})`,
    };
    return (
            <div className='Project shadow' style={style}>
            <div className='Project__overlay'>
               <div className="Project__overlay-text">
                   <h3 className={'py-1'}>{props.name}</h3>
                   <div className="Project__stacks">
                       {props.stack.map((stack , i) =>{
                           return <div key={i} className={'Project__stack'}>{stack}</div>
                       })}
                   </div>
                   <div className="Project__buttons">
                       <a className={'btn btn-dark w-100 mx-1'} rel="noopener noreferrer" target="_blank" href={props.url}>Watch</a>
                       <a  className={'btn btn-dark w-100 mx-1'} rel="noopener noreferrer" target="_blank" href={props.repo}>Repo</a>
                   </div>
               </div>
            </div>
            </div>
    )

};

export default Project;
