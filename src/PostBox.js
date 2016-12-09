// PostBox component
import React from 'react';
var PostBox = React.createClass({
    render() {
        return(
            <div className='blog-post'>
				<div className='card-panel'>
					<form onSubmit = {this.props.handleSubmit}>
						<div className="input-field col s12">
							<input id="title" type="text" />
							<label htmlFor="title">title</label>
						</div> 
						
						<div className="input-field col s12">
						   <textarea id='content' className='materialize-textarea' placeholder="start writing your post..." ></textarea>
						</div>
					
						<div className="file-field input-field col s12">
							<div className="btn">
								<span>Photo</span>
								<input type="file" id="pic-upload" />
							</div>
							
							<div className="file-path-wrapper">
								<input id="file-name" className="file-path validate" type="text" />
							</div>
						</div>
						
						 <button type="submit" className="btn"><i className="fa fa-pencil"></i></button>
					</form>
				</div>
			</div>	
        )
    }
});

export default PostBox;