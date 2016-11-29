// Application
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/materialize-css/dist/css/materialize.css';


var App = React.createClass({
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className='App'>
					<h1>Mama's Little Bakery</h1>
					<div id='nav'>
						<div className='navbar'>
							<Link className='link' activeClassName='active' to='/home'>Home</Link>
							<Link className='link' activeClassName='active' to='/bread'>Bread</Link>
							<Link className='link' activeClassName='active' to='/store'>Store</Link>
							<Link className='link' activeClassName='active' to='/about-us'>About Us</Link>
						</div>
					</div>
					<div className='children'>
						{this.props.children}
					</div>
				</div>
		);
	}
});

export default App;