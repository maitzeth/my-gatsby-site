import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'reactstrap';
import css from '../assets/css/about.module.scss';
import aboutImage from '../assets/images/about.jpg';
import SocialItem from './SocialItem.js';
import pdf from '../assets/cv.pdf';
import CustomButton from './CustomButton';

// 
import LeadParagraph from './styles/LeadParagraph';
import CircularImg from './styles/CircularImg';
import WhiteSectionTitle from './styles/WhiteSectionTitle';
import TextCenter from './styles/TextCenter';
import ULWrapper from './styles/ULWrapper';

const AboutSection = ({ social }) => (
  <Container className={css.aboutWrapper}>
    <Row>
      <Col sm={{ size: '10', offset: 1 }}>
        <WhiteSectionTitle>
          lol
        </WhiteSectionTitle>
        <CircularImg 
          src={aboutImage} 
          width="150px" 
          alt="about-section-image" 
        />
        <LeadParagraph>
          something
        </LeadParagraph>
        <TextCenter>
          <CustomButton text="View CV" link={pdf} color="white" external={true} />
        </TextCenter>
        <Fade>
          <ULWrapper>
            {social.map((item) => <SocialItem key={`socialItem-${item.name}`} {...item} />)}
          </ULWrapper>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default AboutSection;
