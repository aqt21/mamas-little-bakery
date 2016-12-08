import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import StorePage from './StorePage';
import AboutUsPage from './AboutUsPage';
import SignInPage from './SignInPage';

// Render DOM
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
				<IndexRoute component={HomePage}/>
                <Route path='home' component={HomePage}/>
                <Route path='blog' component={BlogPage}/>
				<Route path='store' component={StorePage}/>
				<Route path='about-us' component={AboutUsPage}/>
                <Route path='sign-in' component={SignInPage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
