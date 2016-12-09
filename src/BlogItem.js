import React from 'react';

// Returns a BlogItem object showing its title, image/link, and description.
var BlogItem = React.createClass({
    render() {
		return(      
			<div className='blog-item'>
				<div className='card-panel'>
					<h5>{this.props.data.title}</h5>
					<div id='like-icon' onClick={this.props.handleClick}>{this.props.data.likes}  <i className="fa fa-heart"></i></div>
					<p className='date'>{this.props.data.date}</p>
					<img src={this.props.data.imgurl} />
					<p>{this.props.data.content}</p>
				</div>
			</div>	
        )
    }
});

export default BlogItem;
