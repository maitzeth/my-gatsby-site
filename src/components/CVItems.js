import React, { Fragment } from 'react';
import Summary from '../components/CV/Summary'
import Skills from '../components/CV/Skills'
import Experience from '../components/CV/Experience'

const CVItems = ({ activeItem }) => {	
	return (
		<Fragment>
			{ activeItem === 0 && <Summary /> }
			{ activeItem === 1 && <Skills /> }
			{ activeItem === 2 && <Experience /> }
		</Fragment>
	)
}

export default CVItems;