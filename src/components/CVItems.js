import React, { Fragment } from 'react';
import Summary from '../components/CV/Summary'
import Skills from '../components/CV/Skills'
import Experience from '../components/CV/Experience'
import Education from '../components/CV/Education'

const CVItems = ({ activeItem }) => {	
	return (
		<Fragment>
			{ activeItem === 0 && <Summary /> }
			{ activeItem === 1 && <Skills /> }
			{ activeItem === 2 && <Experience /> }
			{ activeItem === 3 && <Education /> }
		</Fragment>
	)
}

export default CVItems;