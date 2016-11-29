// Page of information about me
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import HomeItem from './HomeItem';

// HomePage Component
var HomePage = React.createClass({
	getInitialState(){
		return{homeItem:[]}
	},

	// When component mounts, get the data and set the state of 'homeItem'
	componentDidMount(){
		$.get('data/home.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({homeItem:parsed.data})
		}.bind(this));
		
		$('#home').animate({opacity: '1'}, "slow");
	},
	
	// Render a <HomeItem> element
	render() {
		return (
			<div className='container' id='home'>
				{this.state.homeItem.map(function(item, i) {
						return <HomeItem key={'item-' + i} name={item.name} img={item.img} email={item.email} number={item.number} facebook={item.facebook} bio={item.bio}/>
				})}
			</div>
		);
	}
});

export default HomePage;
