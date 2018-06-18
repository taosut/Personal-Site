import React from 'react';
import axios from 'axios';
import Github from "../Github/Github";
import './Portfolio.css'
import Zoom from 'react-reveal'
export default class Portfolio extends React.Component {
    state = {
        projects: []
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/EnesOG/repos?page=1&per_page=6`)
            .then(res => {
                const projects = res.data;
                this.setState({projects});
            })
    }

    render() {

        return (
            <div className="container">
                <h5 className="text-center RobotoBOLD my-4">My recent work</h5>
            <div className='row'>

                {this.state.projects.map((project , index) =>
                    <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-12 mx-auto my-3'>
                        <Zoom>
                    <Github link={project.html_url} name={project.name}/>
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