import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'reactstrap';
import { sectionTitle } from '../assets/css/project.module.scss';
import css from '../assets/css/about.module.scss';
import aboutImage from '../assets/images/about.jpg';
import SocialItem from './SocialItem.js';
import pdf from '../assets/cv.pdf';
import CustomButton from './CustomButton';

const AboutSection = ({ social }) => (
  <Container fluid className={css.aboutWrapper}>
    <Row>
      <Col sm={{ size: '10', offset: 1 }}>
        <h2 className={`${sectionTitle} ${css.aboutSectionTitle} display-4 text-center`}>Who I am</h2>
        <img src={aboutImage} alt="about me" className={css.aboutImage} />
        <p className="lead text-center">
          I'm Andre Ivan, a Informatic Engineer doing Web Developer. I was born in Venezuela, currently living
          in Argentina. I love to share what I learn and I've been working on web development in almost 4
          years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and
          Paradigms. I primarily works with Javascript, HTML, CSS and all the technologies behind that. But im
          proficient in other languages too, like PHP and Ruby.
        </p>
        <div className="text-center">
          <CustomButton text="View CV" link={pdf} color="white" external={true} />
        </div>
        <Fade>
          <ul className={css.socialWrapper}>
            {social.map((item) => <SocialItem key={`socialItem-${item.name}`} {...item} />)}
          </ul>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default AboutSection;
