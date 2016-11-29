import React from 'react';

// Returns a picture, contact information, and a bio
var HomeItem = React.createClass({
    render() {
		return(
			<div className='home-item'>
				<div className='card-panel'>
					<div id='picture'>
						<img src={'imgs/' + this.props.img} alt='profile pic'/>
					</div>
					
					<div id='contact'>
						<div>
							<i className='fa fa-envelope-square fa-3x'></i>
							<p><a href={'mailto:' + this.props.email}>{this.props.email}</a></p>
						</div>
						
						<div>
							<i className='fa fa-phone-square fa-3x'></i>
							<p>{this.props.number}</p>
						</div>
						
						<div>
							<i className='fa fa-facebook-square fa-3x'></i>
							<p><a target='_blank' href={this.props.facebook}>{this.props.name}</a></p>
						</div>
					</div>
				</div>
					
				<div className='card-panel'>
					<p>{this.props.bio}</p>
				</div>
			</div>
        )
    }
});

export default HomeItem;
