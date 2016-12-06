import React from 'react';
import { Link } from 'react-router';

// Returns a picture, contact information, and a bio
var HomeItem = React.createClass({
    render() {
    	//<img src={this.props.img} alt='background'/>
		return(
			<div className='home-item'>
				<div className='card-panel'>
						<Link className='homelink' activeClassName='active' to='/blog'>Bread</Link>
						<Link className='homelink' activeClassName='active' to='/store'>Store</Link>
				</div>
					
			</div>
        )
    }
});

export default HomeItem;
