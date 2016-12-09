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
		return{storeItems:[], isUploading:false, uploadPicUrl:"", currRefId:"", showInfo:false}
	},

	// When component mounts, get the data and set the state of 'storeItems'
	componentDidMount(){

		this.storeRef = firebase.database().ref("Store");
		
		this.storeRef.on("value", (snapshot)=> {
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
			imgurl: this.state.uploadPicUrl,
			description: event.target.elements["description"].value,
			price: "$" + event.target.elements["price"].value
		});
	},
	
	showProductInfo(event) {
		$("#productcover").animate({opacity: 0.7}, 300);
		this.setState({currRefId: event.target.id, showInfo:true});
	},
	
	handleUploadStart(){
		this.setState({isUploading: true})
	},
	
	handleProgress(progress){
		
	},
	
	handleUploadError(error){
	  this.setState({isUploading: false});
	  console.error(error);
	},
	
	handleUploadSuccess(filename){
	  this.setState({avatar: filename, isUploading: false});
	  firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({uploadPicUrl: url}));
	},
	
	hideProduct() {
		console.log("hi");
		$("#productcover").animate({opacity: 0}, 300);
		this.setState({showInfo:false});
	},
	
	// Render a <StoreItem> element for each element in the state
	render() {
		let storeKeys = Object.keys(this.state.storeItems).sort((a,b) => {
            return this.state.storeItems[b].likes - this.state.storeItems[a].likes
        });
		
		let currRef = this.state.currRefId;

		return (
			<div>
				<div id='store'>
					<div className='container'>
						<form className="col s12 active" onSubmit = {this.createProduct}>
							{(this.state.showInfo ?
								<div className="card horizontal" id="productinfo">
									<div id="exitcontainer" onClick={this.hideProduct}>
										<i className="fa fa-times exit" aria-hidden="true"></i>
									</div>
									
									<div className="card-image">
										<img src={this.state.storeItems[currRef].imgurl} />
									</div>
									<div className="card-stacked">
										<div className="card-content">
										<h2>{this.state.storeItems[currRef].title}</h2>
										<p>{this.state.storeItems[currRef].description}</p>
										<p>{this.state.storeItems[currRef].price}</p>
										</div>
										<div className="card-action">
											<a href="#">Buy Now</a>
										</div>
									</div>
								</div>
							: false
							)}
							<div className="input-field col s6">
								<input id="title" type="text"></input>
								<label htmlFor="title">Product Title</label>
							</div>
							
							<div className="input-field col s6" >
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
							<button type="submit" className="submit btn waves-effect waves-light" name="action">Post Product<i className="material-icons right"></i></button>
						</form>
						<div className="row">
						{storeKeys.map((d) => {
								return <StoreItem key={d} productRef={d} data={this.state.storeItems[d]} handleClick={this.showProductInfo}/>
							})}
						</div>
					</div>
					
					
				</div>
				
				<div id="productcover">
				</div>
			</div>
		);
	}
});

export default StorePage;
