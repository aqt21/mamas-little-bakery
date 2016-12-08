// Page of store items to show
import React from 'react';
import $ from 'jquery';
import './css/Store.css';
import StoreItem from './StoreItem';
import firebase from "firebase";
import FirebaseConfig from "./Config";

var addProduct = React.createClass({
	render(){
	
	}
});

// StorePage Component
var StorePage = React.createClass({
	getInitialState(){
		return{storeItems:[]}
	},

	// When component mounts, get the data and set the state of 'storeItems'
	componentDidMount(){
		firebase.initializeApp(FirebaseConfig);
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
	
	// Render a <StoreItem> element for each element in the state
	render() {
		let storeKeys = Object.keys(this.state.storeItems).sort((a,b) => {
            return this.state.storeItems[b].likes - this.state.storeItems[a].likes
        });
		
		console.log(this.state.storeItems);
		
		return (
			<div className='container' id='store'>
				<a className="btn-floating btn-large waves-effect waves-light red"><i className="fa fa-plus"></i></a>

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
