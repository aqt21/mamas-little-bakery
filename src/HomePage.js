// Page of information about me
import React from 'react';
import $ from 'jquery';
import HomeItem from './HomeItem';
import './css/Home.css';
import firebase from 'firebase';

// HomePage Component
var HomePage = React.createClass({
	getInitialState(){
		return {imgs:[]};
	},

	// When component mounts, get the data and set the state of 'homeItem'
	componentDidMount(){
		this.homePageRef = firebase.database().ref('homePage');

		//for testing; add data
		this.homePageRef.push({
			img: './bread.jpg',
		})

		this.homePageRef.push({
			img: './bread2.jpg'
		})

		//get data from Firebase
		
		this.homePageRef.on('value', (snapshot) => {
			if(snapshot.val()){
				this.setState({imgs:snapshot.val()});
			}
		});
		
		$('#home').animate({opacity: '1'}, "slow");
	},
	
	// Render a <HomeItem> element
	render() {
		//let backImgs = Object.keys(this.state.imgs);
		//var backgroundImg1 = this.state.imgs[0].img;
		//var backgroundImg2 = this.state.imgs[1].img;
		
		//img = {this.state.imgs[d]}
				// 		{backImgs.map((d)=> {
				// 	return <HomeItem key={d}
				// 			img={this.state.imgs[d]} 
				// 			button={'Blog'}
				// 			link={'./BreadPage'}/>
				// })}
		return (
			<div className='container' id='home'>
				<HomeItem key={'img1'} img={'imgs/bread.jpg'} button={'Blog'} link={'./BreadPage.js'} />
				<HomeItem key={'img2'} img={'imgs/bread2.jpg'} button={'Store'} link={'./StorePage.js'}/>
			</div>
		);
	}
});

export default HomePage;
