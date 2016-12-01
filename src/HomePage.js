// Page of information about me
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import HomeItem from './HomeItem';
import firebase from 'firebase';

// HomePage Component
var HomePage = React.createClass({
	getInitialState(){
		return {imgs:[]};
	},

	// When component mounts, get the data and set the state of 'homeItem'
	componentDidMount(){
		//get data from Firebase
		this.homePageRef = firebase.database().ref('homePage');
		this.homePageRef.on('value', (snapshot) => {
			if(snapshot.val()){
				this.setState({imgs:snapshot.val()});
			}
		});
		
		$('#home').animate({opacity: '1'}, "slow");
	},
	
	// Render a <HomeItem> element
	render() {
		var backgroundImg1 = this.state.imgs[0];
		var backgroundImg2 = this.state.imgs[1];
		return (
			<div className='container' id='home'>
				<HomeItem key={'img1'} img={backgroundImg1} button={'Button title 1'} link={'page link 1'} />
				<HomeItem key={'img2'} img={backgroundImg2} button={'Button title 2'} link={'page link 2'}/>
			</div>
		);
	}
});

export default HomePage;
