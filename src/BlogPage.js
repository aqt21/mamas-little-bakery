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
	
	makePost(){
		
	},
	
	// Render a <BlogItem> element for each element in the state
	render() {
		let blogKeys = Object.keys(this.state.blogItems).sort((a,b) => {
            return this.state.blogItems[b].likes - this.state.blogItems[a].likes
        });
		
		return (
			<div className='container' id='blog'>
				<div className='blog-post'>
					<div className='card-panel'>
						<form>
							<div className="input-field">
							   <textarea id="writeMessage" placeholder="start writing your post..." className="materialize-textarea"></textarea>
							</div>
						
							<div className="file-field input-field">
								
								<div className="btn">
									<span>Photo</span>
									<input type="file" id="pic-upload" />
								</div>
								
								<div className="file-path-wrapper">
									<input id="file-name" className="file-path validate" type="text" />
								</div>
							</div>
							
							<a id="post-button" className="btn-floating waves-effect waves-light">
								<i className="fa fa-pencil"></i>
							</a>
						</form>
					</div>
				</div>	
				{blogKeys.map((d) => {
					return <BlogItem key={d} data={this.state.blogItems[d]} />
				})}
			</div>
		);
	}
});

export default BlogPage;