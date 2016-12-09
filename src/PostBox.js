// PostBox component
import React from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader'; 

var PostBox = React.createClass({
    render() {
        return(
            <div className='blog-post'>
				<div className='card-panel'>
					<h5>Make a Post</h5>
					<form onSubmit={this.props.handleSubmit}>
						<div className="input-field col s12">
							<input id="title" type="text" />
							<label htmlFor="title">Title</label>
						</div> 
						
						<div className="input-field col s12">
							<textarea id='content' className='materialize-textarea'></textarea>
							<label htmlFor="content">Text</label>
						</div>
						
						<div id='upload' className="input-field col s6">
							<FileUploader
								accept="image/*"
								randomizeFilename
								storageRef={firebase.storage().ref("images")}
								onUploadStart={this.props.handleUploadStart}
								onUploadError={this.props.handleUploadError}
								onUploadSuccess={this.props.handleUploadSuccess}
								onProgress={this.props.handleProgress}
							/>
						</div>
						
						 <button type="submit" className="btn waves-effect waves-light" disabled={this.props.isUploading}>post</button>
					</form>
				</div>
			</div>	
        )
    }
});

export default PostBox;