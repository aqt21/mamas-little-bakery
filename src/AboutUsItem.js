// Page of resume items to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import AboutUsItem from './AboutUsItem';

// ResumePage Component
var AboutUsPage = React.createClass({
	getInitialState(){
		return{resumeItems:[]}
	},

	// When component mounts, get the data and set the state of 'resumeItems'
	componentDidMount(){
		$.get('data/resume.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({resumeItems:parsed.data})
		}.bind(this));
		
		$('#resume').animate({opacity: '1'}, "slow");
	},
	
	// Render a <AboutUsItem> element for each element in the state
	render() {
		return (
			<div className='container' id='resume'>
				{this.state.resumeItems.map(function(item, i) {
						return <AboutUsItem key={'item-' + i} title={item.title} position={item.position} description={item.description} date={item.date} />
					})}
			</div>
		);
	}
});

export default AboutUsPage;
