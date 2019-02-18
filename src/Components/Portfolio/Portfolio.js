import React from 'react';
import Project from "../Project/Project";
import './Portfolio.css'
import {projects} from "../../projects";
import Zoom from 'react-reveal'
export default class Portfolio extends React.Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        this.setState({ projects})
    }

    render() {
        return (
            <div className="container">
                <h5 className="text-center RobotoBOLD my-4">my work</h5>
            <div className='row'>
                {this.state.projects.map((project , index) =>
                    <div key={index} className='col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12 my-5'>
                        <Zoom>
                    <Project name={project.name} url={project.url} repo={project.repo} image={project.image} stack={project.stack}/>
                        </Zoom>
                    </div>

                )}
            </div>
                  <div className=" text-center justify-content">
                <button className="btn btn-Custom mb-2"><a className="customAhref" href="https://github.com/EnesOG?tab=repositories">See more on github</a></button>
                </div>


            </div>
        )
    }
}
