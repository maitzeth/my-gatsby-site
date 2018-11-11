import React from 'react'
import { Fade } from 'react-reveal';

const pStyles = {
	color: 'whitesmoke',
	textAlign: 'center'
}

const Summary = () => (
	<Fade>
		<h1 className="mb-5" style={pStyles}>Summary</h1>
		<p className="lead" style={pStyles}>
			I'm Andre Ivan, a Informatic Engineer doing Web Developer. I was born in
			Venezuela, currently living in Argentina. I love to share what I learn and
			I've been working on web development in almost 4 years. I spend most of my
			time learning about new Technologies, Methodologies, Best Practices and
			Paradigms. I primarily works with Javascript, HTML, CSS and all the
			technologies behind that. But im proficient in other languages too, like
			PHP and Ruby.
		</p>
	</Fade>
)

export default Summary
