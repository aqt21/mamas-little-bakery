// Page of blogs to show
import React from 'react';
import './css/Blog.css';
import firebase from 'firebase';
import $ from 'jquery';
import BlogItem from './BlogItem';
import PostBox from './PostBox';
import FirebaseConfig from './Config';

// BlogPage Component
var BlogPage = React.createClass({
	getInitialState(){
		return{blogItems:[]}
	},

	// When component mounts, get the data and set the state of 'blogItems'
	componentDidMount(){

		this.blogRef = firebase.database().ref("Blog");
		this.blogRef.on("value", (snapshot)=> {
			if(snapshot.val()){
				this.setState({blogItems:snapshot.val()});
			}
		});
		$('#blog').animate({opacity: '1'}, "slow");
	},
	
	 // Function to create a new post
    createPost(event) {
        event.preventDefault();
		var d = new Date();
        // Get form info
        let post = {
            title:event.target.title.value,
            content:event.target.content.value,
			date: ((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + "   " + d.getHours() + ":" + d.getMinutes()),
            likes:0,
        };
        this.blogRef.push(post);
        event.target.reset();
    },

    // Function to like a post
    likePost(postId) {
        let ref = this.blogRef.child(postId);
        ref.once('value').then(function(snapshot) {
            var newLikes = parseInt(snapshot.val().likes) + 1;
            console.log(newLikes)
            // Update on firebase
            ref.update({
                likes: newLikes
            });
        });
    },

	
	// Render a <BlogItem> element for each element in the state
	render() {
		return (
			<div className='container' id='blog'>
				<PostBox handleSubmit={this.createPost}/>
				{Object.keys(this.state.blogItems).map((d) => {
					return <BlogItem key={d} data={this.state.blogItems[d]} handleClick={() => this.likePost(d)}
					/>
				})}
			</div>
		);
	}
});

export default BlogPage;