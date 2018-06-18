import React, { Component } from 'react';
import './App.css';
import HeadBanner from "../HeadBanner/HeadBanner";
import About from '../../Components/About/About'
import SecondBanner from "../SecondBanner/SecondBanner";
import Stack from "../Stack/Stack";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer"

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    }

    render() {
        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return null; // render null when app is not ready
        }

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
