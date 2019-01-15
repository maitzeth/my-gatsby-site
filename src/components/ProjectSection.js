import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Project from './Project';
import Title from './styles/Title';
import CustomBtnLink from './styles/CustomBtnLink';
import styled from 'styled-components';

const ContentWrapper = styled(Container)`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
  padding-top: 5em;
  padding-bottom: 5em;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    height: auto;
    padding-top: 3em;
    padding-bottom: 3em;
  }
`;

class ProjectSection extends Component {
  render() {
    const { projectEdges } = this.props;

    return (
      <ContentWrapper fluid>
        <Container>
          <Row className="mb-4">
            <Col>
              <Title white>Latest works</Title>
            </Col>
          </Row>
          <Row>
            {projectEdges.map(({ node }, index) => (
              <Project 
                key={`client-${index}`} 
                {...node} 
                id={index}
              />
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <CustomBtnLink to="/projects">
                <span>View more</span>
              </CustomBtnLink>
            </Col>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

export default ProjectSection;
