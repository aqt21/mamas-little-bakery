import React from 'react';

// Returns a resume item containing the experience, position I held, date, and description.
var StoreItem = React.createClass({
    render() {
		return(
			<div className='resume-item'>
				<div className='card-panel'>
					<h5>{this.props.title}</h5>
					<h6 className='position'>{this.props.position}</h6>
					<h6>{this.props.date}</h6>
					<p>{this.props.description}</p>
				</div>
			</div>			
        )
    }
});

export default StoreItem;
