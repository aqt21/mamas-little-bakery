import React from 'react';
import { Link } from 'react-router';

// Returns a picture, contact information, and a bio
var HomeItem = React.createClass({
    render() {
		return(
			<div className='home-item'>
				<div className='card-panel'>
					<div id='picture'>
						<img src={this.props.img} alt='background'/>
						<form action={this.props.link} className="homeButton">
							<input type="submit" value={this.props.button}/>
						</form>
						<Link className='link' activeClassName='active' to='/bread'>Bread</Link>
						<Link className='link' activeClassName='active' to='/store'>Store</Link>
					</div>
				</div>
					
			</div>
        )
    }
});

export default HomeItem;
