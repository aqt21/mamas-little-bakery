// Page of blogs to show
import React from 'react';
import './css/Blog.css';
import firebase from 'firebase';
import $ from 'jquery';
import BlogItem from './BlogItem';

// BlogPage Component
var BlogPage = React.createClass({
	getInitialState(){
		return{blogItems:[]}
	},

	// When component mounts, get the data and set the state of 'blogItems'
	componentDidMount(){
		this.blogRef = firebase.database().ref("Blog");
		console.log("success");
		this.blogRef.on("value", (snapshot)=> {
			console.log("success");
			if(snapshot.val()){
				
				this.setState({blogItems:snapshot.val()});
			}
		});
		$('#blog').animate({opacity: '1'}, "slow");
	},
	
	// Render a <BlogItem> element for each element in the state
	render() {
		let blogKeys = Object.keys(this.state.blogItems).sort((a,b) => {
            return this.state.blogItems[b].likes - this.state.blogItems[a].likes
        });
		
		console.log(this.state.blogItems);
		
		return (
			<div className='container' id='blog'>
				{blogKeys.map((d) => {
					return <BlogItem key={d} data={this.state.blogItems[d]} />
				})}
			</div>
		);
	}
});

export default BlogPage;