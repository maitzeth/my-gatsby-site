import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'reactstrap';
import css from '../assets/css/about.module.scss';
import aboutImage from '../assets/images/about.jpg';
import SocialItem from './SocialItem.js';
import pdf from '../assets/cv.pdf';

// 
import LeadParagraph from './styles/LeadParagraph';
import CircularImg from './styles/CircularImg';
import Title from './styles/Title';
import TextCenter from './styles/TextCenter';
import CutomBtn from './styles/CutomBtn';

const ULWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  margin-top: 2em;

  li {
    display: inline-block;
    padding: 0.5em;
    transition: all 200ms ease;

    &:hover {
      transform: translateY(-3px);
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.primaryColor};

      &:hover {
        text-decoration: none;
      }

      i {
        font-size: 1.5em;
      }
    }
  }
`;

const AboutSection = ({ social }) => (
  <Container className={css.aboutWrapper}>
    <Row>
      <Col sm={{ size: '10', offset: 1 }}>
        <Title black>
          lol
        </Title>
        <CircularImg 
          src={aboutImage} 
          width="150px" 
          alt="about-section-image" 
        />

        <LeadParagraph>
          something
        </LeadParagraph>

        <TextCenter>
          <CutomBtn href={pdf} black target="_blank" rel="noopener noreferrer">
            <span>View CV</span>
          </CutomBtn>
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