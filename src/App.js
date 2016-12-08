// Application
import React from 'react';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/materialize-css/css/ghpages-materialize.css';
import firebase from 'firebase';
import FirebaseConfig from './Config';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ToggleAuth from './ToggleAuth';


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

	signUp(event){
		event.preventDefault();

		//get form values
		let email = event.target.elements['email'].value;
		let password = event.target.elements['password'].value;
		let displayName = event.target.elements['displayName'].value;
		//let adminCode = event.target.elements['adminCode'].value;
		//var admin = (adminCode == ADMIN_CODE)
		//update profile, admin: admin

		//create user
		firebase.auth().createUserWithEmailAndPassword(email,password)
		.then((user)=> {
			user.updateProfile({
				displayName: displayName
			}).then(() => {
				this.setState({user:firebase.auth().currentUser});
			})
		});

		event.target.reset();
	},

	signIn(event){
		event.preventDefault();

		let email = event.target.elements['email'].value;
		let password = event.target.elements['password'].value;


		//sign in
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then((user) => {
			this.setState({user:firebase.auth().currentUser});
		})

		//clear form
		event.target.reset();
	},

	signOut(){
		firebase.auth().signOut().then(() => {
			this.setState({user:null});
		});
	},

	toggleLogin(){
		let option = this.state.authOption == 'sign=in' ? 'sign-up' : 'sign-in';
		this.setState({authOption:option});
	},

	render() {
		//auth stuff
		if(this.state.authOption == 'sign-up') {
			var authComponent = <SignUp submit={this.signUp}/>
		}
		else{
			var authComponent = <SignIn submit={this.signIn}/>
		}

		// Return links and show anything inside the <App> component (children)
		return (
				<div className='App'>
					<h1>Mama's Little Bakery</h1>
					{!this.state.user && 
						<div>
							{authComponent}
							<ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
						</div>
					}
					{
						this.state.user &&
						<section>
							<SignOut submit={this.signOut}/>
						</section>
					}
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