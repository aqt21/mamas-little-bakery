// Application
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';
import firebase from 'firebase';
import FirebaseConfig from './Config';


var App = React.createClass({
	getInitialState(){
		return{checked:false, user:null, authOption:'sign-in'}
	},
	
	componentWillMount(){
		firebase.initializeApp(FirebaseConfig);
		
		firebase.auth().onAuthStateChanged((user) => {
			if(this.state.checked !== true){
				if(user){
					this.setState({user:user});
				}
			}

			//Indicate that state has been checked
			this.setState({checked:true})
		});
	},

	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className='App'>
					<h1>Mama's Little Bakery</h1>
					<div id='nav'>
						<div className='navbar'>
							<Link className='link' activeClassName='active' to='/home'>Home</Link>
							<Link className='link' activeClassName='active' to='/blog'>Blog</Link>
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