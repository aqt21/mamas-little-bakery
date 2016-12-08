// Page of store items to show
import React from 'react';
import $ from 'jquery';
import './css/Store.css';
import StoreItem from './StoreItem';
import firebase from "firebase";
import FirebaseConfig from "./Config";
import FileUploader from 'react-firebase-file-uploader'; 

// StorePage Component
var StorePage = React.createClass({
	getInitialState(){
		return{storeItems:[], isUploading:false, progress:0, picUrl:""}
	},

	// When component mounts, get the data and set the state of 'storeItems'
	componentDidMount(){

		this.storeRef = firebase.database().ref("Store");
		console.log("success");
		this.storeRef.on("value", (snapshot)=> {
			console.log("success");
			if(snapshot.val()){
				this.setState({storeItems:snapshot.val()});
			}
		});
		$('#store').animate({opacity: '1'}, "slow");
	},
	
	createProduct(event) {
		event.preventDefault();
		
		this.storeRef.push({
			title: event.target.elements["title"].value,
			imgurl: this.state.picUrl,
			description: event.target.elements["description"].value,
			price: "$" + event.target.elements["price"].value
		});
	},
	
	handleUploadStart(){
		this.setState({isUploading: true, progress: 0})
	},
	
	handleProgress(progress){
		this.setState({progress})
	},
	
	handleUploadError(error){
	  this.setState({isUploading: false});
	  console.error(error);
	},
	
	handleUploadSuccess(filename){
	  this.setState({avatar: filename, progress: 100, isUploading: false});
	  firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({picUrl: url}));
	},
	
	// Render a <StoreItem> element for each element in the state
	render() {
		let storeKeys = Object.keys(this.state.storeItems).sort((a,b) => {
            return this.state.storeItems[b].likes - this.state.storeItems[a].likes
        });
		
		console.log(this.state.storeItems);
		
		return (
			<div className='container' id='store'>
				<form className="col s12 active" onSubmit = {this.createProduct}>
					<div className="input-field col s6">
						<input id="title" type="text"></input>
						<label htmlFor="title">Product Title</label>
					</div>
					
					<div className="input-field col s6">
						<textarea className="materialize-textarea" id="description" type="text"></textarea>
						<label htmlFor="description">Product Description</label>
					</div>
					
					<div className="input-field col s6">
						<input id="price" type="text"></input>
						<label htmlFor="price">Product Price</label>
					</div>
					
					<div className="input-field col s6">
						<FileUploader
							accept="image/*"
							randomizeFilename
							storageRef={firebase.storage().ref("images")}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
							onProgress={this.handleProgress}
						  />
					</div>
					<button type="submit" className="submit btn waves-effect waves-light light-blue lighten-2" name="action">Post Product<i className="material-icons right"></i></button>
				</form>
				<div className="row">
				{storeKeys.map((d) => {
						return <StoreItem key={d} data={this.state.storeItems[d]} />
					})}
				</div>
			</div>
		);
	}
});

export default StorePage;
