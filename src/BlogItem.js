import React from 'react';

// Returns a BlogItem object showing its title, image/link, and description.
var BlogItem = React.createClass({
	getInitialState(){
		return{expanded:false}
	},

	handleClick(){
		var isExpanded = !this.state.expanded;
		this.setState({expanded:isExpanded});
		console.log(this.state.expanded);
		
		if(this.state.expanded){
			console.log('close');
		} else {
			console.log('open');
		}
	
	},
	
    render() {
		return(      
			<div className='blog-item'>
				<div className='card-panel'>
					<div className='content-header'>
						<h5>{this.props.data.title}</h5>
						<div className='like-button' onClick={this.props.likePost}>{this.props.data.likes}  <i className="fa fa-heart" aria-hidden="true"></i></div>
						<p className='date'>{this.props.data.date}</p>
					</div>	
					
					{this.state.expanded ?
						<div>
							<img src={this.props.data.imgurl} />
							<p className='content'>{this.props.data.content}</p>
						</div>
					:false}
					
					<div className='toggle-expand' onClick={this.handleClick}>
						{this.state.expanded ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
					</div>
				</div>
			</div>	
        )
    }
});

export default BlogItem;
