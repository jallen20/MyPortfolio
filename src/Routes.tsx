import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from "./components/intro";
import About from "./sections/about";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Intro}/>
            <Route path="/about" exact component={About}/>
        </Switch>
    )
}