import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import css from '../assets/css/aboutSection.module.css';
import SocialItem from './SocialItem';

const AboutSection = ({ title, text, aboutImg, social }) => {
  return (
    <div className={css.AboutWrapper}>
      <Container>
        <Row>
          <Col sm={{ size: '8', offset: 2 }}>
            <h1 className={css.AboutTitle}>{title.toUpperCase()}</h1>
            <img src={aboutImg} alt="About Section" className={css.AboutImage} />
            <p className={`lead ${css.AboutText}`}>{ text }</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={{ size: '8', offset: 2 }}>
            <ul className={css.Social}>
              { social.map((social, index) => <SocialItem key={index} {...social} />) }
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default AboutSection;