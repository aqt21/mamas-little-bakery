import React from 'react';

// Returns a store item containing the experience, position I held, date, and description.
var StoreItem = React.createClass({
    render() {
		return(
			<div className="col s12 m7 l3">
			  <div className="card">
				<div className="card-image">
				  <img src={this.props.data.imgurl} />
				  <span className="card-title">{this.props.data.title}</span>
				</div>
				<div className="card-content">
				  <p>{this.props.data.description}</p>
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
