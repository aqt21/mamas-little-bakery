import React from 'react';

// Returns a store item containing the experience, position I held, date, and description.
var StoreItem = React.createClass({
    render() {
		return(
			<div className="col s12 m6 l3">
			  <div className="card medium">
				<div className="card-image">
				  <img id="cardimg" src={this.props.data.imgurl} />
				</div>
				<div className="card-content">
				  <h5>{this.props.data.title}</h5>
				  <p>{this.props.data.description.substring(0,33) + " ..."}</p>
				  <br/>
				  <p>Price: {this.props.data.price}</p>
				</div>
				<div className="card-action">
				  <a className="s6" >Buy Now</a>
				  <a className="s6" onClick={this.props.handleClick} id={this.props.productRef}>More Info</a>
				</div>
			  </div>
			</div>
        )
    }
});

export default StoreItem;
