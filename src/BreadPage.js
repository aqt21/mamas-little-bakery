// Page of projects to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import BreadItem from './BreadItem';

// ProjectPage Component
var BreadPage = React.createClass({
	getInitialState(){
		return{projects:[], currProject:[], slideIndex:0}
	},

	// When component mounts, get the data and set the state of 'projects'
	componentDidMount(){
		$.get('data/projects.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data, currProject:parsed.data[0]})
		}.bind(this));
		
		$('#projects').animate({opacity: '1'}, "slow");
	},
	
	// Change to previous project in slide
	prevSlide(){
		var currIndex = this.state.slideIndex;
		if(currIndex === 0) {
			currIndex = this.state.projects.length - 1;
		} else {
			currIndex--;
		}
		this.setCurrProject(currIndex);
	},
	
	// Change to next project in slide
	nextSlide(){
		var currIndex = this.state.slideIndex;
		if(currIndex === this.state.projects.length - 1) {
			currIndex = 0;
		} else {
			currIndex++;
		}
		this.setCurrProject(currIndex);
	},
	
	// Set the current project
	setCurrProject(index){
		this.setState({slideIndex:index, currProject:this.state.projects[index]});
	},
	
	// Render a <Project> element for each element in the state
	render() {
		return (
			<div className='container' id='projects'>
				<div id='slideControl'>
					<a className="prev" onClick={this.prevSlide}>&#10094;</a>
					<div className='index'>{(this.state.slideIndex + 1) + ' / ' + this.state.projects.length}</div>
					<a className="next" onClick={this.nextSlide}>&#10095;</a>
				</div>
				<BreadItem title={this.state.currProject.title} description={this.state.currProject.description} img={this.state.currProject.img} url={this.state.currProject.url} />
			</div>
		);
	}
});

export default BreadPage;
