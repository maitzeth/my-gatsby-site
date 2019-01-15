import { graphql } from 'gatsby';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import image from '../assets/images/headingbg.jpg';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { chunk } from 'lodash';
import Title from '../components/styles/Title';
import CustomBtn from '../components/styles/CustomBtn';

import PageWrapper from '../components/styles/PageWrapper';
import PageHeaderImage from '../components/styles/PageHeaderImage';

import styled from 'styled-components';

let postsToShow = 6;
let morePosts = 3;

const CustomTitle = styled(Title)`
  position: relative;
  z-index: 2;
`;

class ProjectsPage extends React.Component {
  state = {
    showingMore: postsToShow > 6,
    postsToShow
  };

  updatePostToShow = () => {
    const { showingMore, postsToShow } = this.state;
    const { scrollY, innerHeight } = window;

    const distanceToBottom = document.documentElement.offsetHeight - (scrollY + innerHeight);
    if (showingMore && distanceToBottom < 10) {
      this.setState({ postsToShow: postsToShow + morePosts });
    }
    this.ticking = false;
  };

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      window.requestAnimationFrame(() => this.updatePostToShow());
    }
  };

  handleClick = e => {
    const { postsToShow } = this.state;
    e.preventDefault();
    this.setState({
      postsToShow: postsToShow + morePosts,
      showingMore: true
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { postsToShow, showingMore } = this.state;
    const { edges } = this.props.data.allMarkdownRemark;
    const { location } = this.props;

    return (
      <Fragment>
        <Layout pathname={location.pathname}>
          <PageWrapper>
            <PageHeaderImage image={image}>
              <CustomTitle>Projects</CustomTitle>
            </PageHeaderImage>
            <Container className="py-4">
              <Row>
                {chunk(edges.slice(0, postsToShow), morePosts).map((chunk, i) => (
                  <Fragment key={`chunk-${i}`}>
                    {chunk.map(({ node }, index) => (
                      <Project key={`project-${index}`} id={index} {...node} separation="my-3" />
                    ))}
                  </Fragment>
                ))}
              </Row>

              {!showingMore && (
                <Row className="mt-2">
                  <Col sm="12" className="text-center">
                    <CustomBtn onClick={this.handleClick}>
                      <span>Load more</span>
                    </CustomBtn>
                  </Col>
                </Row>
              )}
            </Container>
          </PageWrapper>
        </Layout>
      </Fragment>
    );
  }
}

export const query = graphql`
  query ProjectsPageQueries {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
