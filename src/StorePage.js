// Page of store items to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import StoreItem from './StoreItem';

// ResumePage Component
var StorePage = React.createClass({
	getInitialState(){
		return{storeItems:[]}
	},

	// When component mounts, get the data and set the state of 'storeItems'
	componentDidMount(){
		$.get('data/store.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({storeItems:parsed.data})
		}.bind(this));
		
		$('#store').animate({opacity: '1'}, "slow");
	},
	
	// Render a <StoreItem> element for each element in the state
	render() {
		return (
			<div className='container' id='store'>
				{this.state.storeItems.map(function(item, i) {
						return <StoreItem key={'item-' + i} title={item.title} position={item.position} description={item.description} date={item.date} />
					})}
			</div>
		);
	}
});

export default StorePage;
