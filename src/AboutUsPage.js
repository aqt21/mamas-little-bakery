// Page of about us items to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import './css/AboutUs.css';
import AboutUsItem from './AboutUsItem';

// ResumePage Component
var AboutUsPage = React.createClass({
	getInitialState(){
		return{aboutUsItems:[]}
	},

	// When component mounts, get the data and set the state of 'aboutUsItems'
	componentDidMount(){
		$.get('data/about-us.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({aboutUsItems:parsed.data})
		}.bind(this));
		
		$('#about-us').animate({opacity: '1'}, "slow");
	},
	
	// Render a <AboutUsItem> element for each element in the state
	render() {
		return (
			<div className='container' id='about-us'>
				{this.state.aboutUsItems.map(function(item, i) {
						return <AboutUsItem key={'item-' + i} title={item.title} position={item.position} description={item.description} date={item.date} />
					})}
			</div>
		);
	}
});

export default AboutUsPage;
