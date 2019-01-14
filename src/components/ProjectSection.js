import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import css from '../assets/css/project.module.scss';
import Project from './Project';
import Title from './styles/Title';
import CustomBtnLink from './styles/CustomBtnLink';

class ProjectSection extends Component {
  state = {
    opacity: false
  };

  handleActiveOpacity = () => {
    this.setState({
      opacity: true
    });
  };

  handleLeaveOpacity = () => {
    this.setState({
      opacity: false
    });
  };

  render() {
    const { projectEdges } = this.props;
    const { opacity } = this.state;

    return (
      <Container
        fluid
        className={css.projectsContainer}
        onMouseEnter={this.handleActiveOpacity}
        onMouseLeave={this.handleLeaveOpacity}
      >
        <Container>
          <Row className="mb-4">
            <Col>
              <Title white>Latest eworks</Title>
            </Col>
          </Row>
          <Row>
            {projectEdges.map(({ node }, index) => (
              <Project 
                key={`client-${index}`} 
                {...node} 
                opacity={opacity} 
                separation="my-3" 
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
      </Container>
    );
  }
}

export default ProjectSection;
