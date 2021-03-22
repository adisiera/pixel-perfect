import React, { Component } from 'react'
import Hero from '../cmps/Hero';
import About from '../cmps/About';
import Stories from '../cmps/Stories';

export default class Home extends Component {
    render() {
        return (
            <section className="home-container">
                <Hero></Hero>
                <About></About>
                <Stories></Stories>
            </section>
        )
    }
}
