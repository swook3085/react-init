import React, { Component } from 'react'
import Home from '../../components/home/Home'
import { hot } from 'react-hot-loader'

class HomeContainer extends Component {
    render() {
        return (
            <Home />
        )
    }
}
export default hot(module)(HomeContainer);