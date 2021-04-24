import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link to="/about">menu</Link>
                <Link to="/about/react1">menu1</Link>
                <Link to="/about/react2">menu2</Link>
                <Link to="/about/react3">menu3</Link>
                <Link to="/about/react4">menu4</Link>
            </div>
        )
    }
}
