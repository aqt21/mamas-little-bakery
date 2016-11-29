// Page of breads to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import BreadItem from './BreadItem';

// BreadPage Component
var BreadPage = React.createClass({
	getInitialState(){
		return{breads:[], currProject:[], slideIndex:0}
	},

	// When component mounts, get the data and set the state of 'breads'
	componentDidMount(){
		$.get('data/bread.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({breads:parsed.data, currProject:parsed.data[0]})
		}.bind(this));
		
		$('#breads').animate({opacity: '1'}, "slow");
	},
	
	// Change to previous bread in slide
	prevSlide(){
		var currIndex = this.state.slideIndex;
		if(currIndex === 0) {
			currIndex = this.state.breads.length - 1;
		} else {
			currIndex--;
		}
		this.setCurrProject(currIndex);
	},
	
	// Change to next bread in slide
	nextSlide(){
		var currIndex = this.state.slideIndex;
		if(currIndex === this.state.breads.length - 1) {
			currIndex = 0;
		} else {
			currIndex++;
		}
		this.setCurrProject(currIndex);
	},
	
	// Set the current bread
	setCurrProject(index){
		this.setState({slideIndex:index, currProject:this.state.breads[index]});
	},
	
	// Render a <BreadItem> element for each element in the state
	render() {
		return (
			<div className='container' id='breads'>
				<div id='slideControl'>
					<a className="prev" onClick={this.prevSlide}>&#10094;</a>
					<div className='index'>{(this.state.slideIndex + 1) + ' / ' + this.state.breads.length}</div>
					<a className="next" onClick={this.nextSlide}>&#10095;</a>
				</div>
				<BreadItem title={this.state.currProject.title} description={this.state.currProject.description} img={this.state.currProject.img} url={this.state.currProject.url} />
			</div>
		);
	}
});

export default BreadPage;
