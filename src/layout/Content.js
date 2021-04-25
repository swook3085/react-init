import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

const HomeContainer = lazy(() => import('../container/home/HomeContainer'));
const Counter = lazy(() => import('../page/count'));

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={HomeContainer} />
                    <Switch>
                        <Route path="/about/:name" component={Counter}/>
                        <Route path="/about" component={Counter}/>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}
