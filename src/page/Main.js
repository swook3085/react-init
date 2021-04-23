import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Content from '../layout/Content';
import '../resource/styles/layout.css';
import { BrowserRouter } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Content />
                    <Footer />
                </BrowserRouter>
            </>
        )
    }
}
