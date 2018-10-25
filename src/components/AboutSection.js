import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AboutSectionItem from './AboutSectionItem';
import css from '../assets/css/about.module.scss';
import AboutItemContent from './AboutItemContent';

class AboutSection extends Component {
	state = {
		sections: [
			{ id: 0, name: 'Bio', content1: "I'm Andre Ivan, a Informatic Engineer doing Web Developer born in Venezuela, currently living in Argentina. I love to share what I learn and I've been working in the Web since 3 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and Paradigms, like OOP and Functional Programming. Always working with Web Technologies like HTML, CSS and Javascript.", isActive: true },
			{ id: 1, name: 'Skills', content2: [ 'HTML', 'CSS', 'Javascript', 'Webpack', 'React', 'Gatsby' ], isActive: false },
			{ id: 2, name: 'Social', content3: [{ icon: 'instagram', url: 'https://www.instagram.com/maitzethdrummer/' }, { icon: 'github', url: 'https://github.com/maitzeth/' }, { icon: 'linkedin', url: 'https://www.linkedin.com' }, { icon: 'twitter', url: 'https://www.twitter.com/maitzeth' } ], isActive: false }
		]
	}

	handleSectionActive = id => {
		const { sections } = this.state;

    sections.forEach(section => {
      section.isActive = false;
      if (section.id === id) {
        section.isActive = true;
      }
    });

    this.setState({
    	sections
    })
	}

	render() {
		const { sections, sectionActive, } = this.state;

		return (
			<Container fluid className="m-0 p-0">
				<Row noGutters className="align-items-center">
					<Col sm="6">
						<div className={css.aboutItemsWrapper}>
							<ul className={css.aboutList}>
								{ 
									sections.map(({name, isActive, id}, index) => (
										<AboutSectionItem 
											key={index} 
											name={name} 
											isActive={isActive}
											handleSectionActive={this.handleSectionActive}
											id={id} 
										/>)
									) 
								}
							</ul>
						</div>
					</Col>
					<Col sm="6">
						<AboutItemContent sections={sections} />
					</Col>
				</Row>
			</Container>
		)
	}
};

export default AboutSection;