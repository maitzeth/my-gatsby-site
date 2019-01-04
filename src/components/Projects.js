import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import css from '../assets/css/project.module.scss';
import CustomButton from './CustomButton';
import Project from './Project';

class Projects extends Component {
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
              <h2 className={css.sectionTitle}>Latest Works</h2>
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
              <CustomButton text="View more" link="/projects" color="black" />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Projects;
