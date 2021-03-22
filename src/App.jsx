import React from 'react'
import Home from './pages/Home'
import Header from './cmps/Header'
import Footer from './cmps/Footer'
export function App() {
    return(
    <div className="app">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
);
}