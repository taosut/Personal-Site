import React, { Component } from 'react';
import './App.css';
import HeadBanner from "../HeadBanner/HeadBanner";
import About from '../../Components/About/About'
import SecondBanner from "../SecondBanner/SecondBanner";
import Stack from "../Stack/Stack";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer"
import Particles from "react-particles-js";

class App extends Component {

    render() {

        return (
            <div>
                <Particles className='Particles'/>

                <HeadBanner/>

                <SecondBanner/>
                <About/>
                <Stack/>
                <Portfolio/>
                <Footer/>
            </div>
        );
    }
}



export default App;
