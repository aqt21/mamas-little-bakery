import React from 'react';

// Returns a about us item containing the experience, position I held, date, and description.
var AboutUsItem = React.createClass({
    render() {
		return(
			<div className='about-item'>
				<div>
					<p className="hometext">Mama's Little Bakery is a small, family-owned bakery based in Port Angeles. 
					We strive to make delicious homemade breads with a variety of grains and flours to enrich them with nutrients. 
					Our goal is to find ways to make bread both appealing in taste and nutritional value. </p>
				</div>
					
			</div>
        )
    }
});

export default AboutUsItem;
