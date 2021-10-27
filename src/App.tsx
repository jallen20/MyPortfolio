import React from 'react';
import {Router} from 'react-router-dom';
import Routes from "./Routes";
import {createBrowserHistory} from "history";
import Header from "./components/header";
import Footer from "./components/footer";

export default (
    <>
        <Router history={createBrowserHistory()}>
            <Header />
            <Routes />
            <Footer/>
        </Router>
    </>
);