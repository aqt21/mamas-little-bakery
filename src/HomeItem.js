import React from 'react';

// Returns a picture, contact information, and a bio
var HomeItem = React.createClass({
    render() {
		return(
			<div className='home-item'>
				<div className='card-panel'>
					<div id='picture'>
						<img src={this.props.img} alt='background image'/>
						<form action={this.props.link}>
							<input type="submit" value={this.props.button}/>
						</form>
					</div>
				</div>
					
			</div>
        )
    }
});

export default HomeItem;
