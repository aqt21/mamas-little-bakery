import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import HomePage from './HomePage';
import BreadPage from './BreadPage';
import StorePage from './StorePage';
import AboutUsPage from './AboutUsPage';

// Render DOM
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
				<IndexRoute component={HomePage}/>
                <Route path='home' component={HomePage}/>
                <Route path='bread' component={BreadPage}/>
				<Route path='store' component={StorePage}/>
				<Route path='about-us' component={AboutUsPage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
