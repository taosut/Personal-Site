import React, { Component } from 'react';
import './App.css';
import HeadBanner from "../HeadBanner/HeadBanner";
import About from '../../Components/About/About'
import SecondBanner from "../SecondBanner/SecondBanner";
import Stack from "../Stack/Stack";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer"

class App extends Component {

    render() {

        return (
            <div>
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
