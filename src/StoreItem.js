import React from 'react';

// Returns a store item containing the experience, position I held, date, and description.
var StoreItem = React.createClass({
    render() {
		return(
			<div className='store-item'>
				<div className='card-panel'>
					<h5>{this.props.data.title}</h5>
					<img src={this.props.data.imgurl} />
					<p>{this.props.data.description}</p>
					<p>{this.props.data.price}</p>
				</div>
			</div>			
        )
    }
});

export default StoreItem;
