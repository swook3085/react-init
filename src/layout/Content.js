import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../container/home/HomeContainer';
import Counter from '../page/count'

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                <Route exact path="/" component={HomeContainer} />
                <Switch>
                    <Route path="/about/:name" component={Counter}/>
                    <Route path="/about" component={Counter}/>
                </Switch>
            </div>
        )
    }
}
