import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../container/home/HomeContainer';
import CounterContainer from '../container/counter/CounterContainer';

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                <Route exact path="/" component={HomeContainer} />
                <Route path="/count" component={CounterContainer} />
            </div>
        )
    }
}
