import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import { Container, Row, Button, Col } from 'reactstrap'
import css from '../assets/css/page.module.scss'
import image from '../assets/images/headingbg.jpg'
import Layout from '../components/Layout'
import Project from '../components/Project'
import { chunk } from 'lodash'

let postsToShow = 6

const primaryStyle = {
  borderRadius: '0',
  backgroundColor: 'transparent',
  border: '2px solid #fff',
  padding: '0.5em 3em',
  position: 'relative',
  overflow: 'hidden',
}

class ProjectsPage extends React.Component {
  state = {
    showingMore: postsToShow > 6,
    postsToShow,
  }

  updatePostToShow = () => {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 10) {
      this.setState({ postsToShow: this.state.postsToShow + 3 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      window.requestAnimationFrame(() => this.updatePostToShow())
    }
  }

  handleClick = () => {
    this.setState({
      postsToShow: this.state.postsToShow + 3,
      showingMore: true,
    })
  }

  componentDidMount() {
    // If you add a listener.
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    // You have to remove it.
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  render() {
    const { postsToShow, showingMore } = this.state
    const { edges } = this.props.data.allMarkdownRemark

    return (
      <Fragment>
        <Layout>
          <main className={css.pageWrapper}>
            <header
              className={css.pageHeaderImage}
              style={{ backgroundImage: `url(${image})` }}
            >
              <h3 className="display-4">Projects</h3>
            </header>
            <Container className="py-4">
              <Row className="mt-5">
                {chunk(edges.slice(0, postsToShow), 3).map((chunk, i) => (
                  <Fragment key={`chunk-${i}`}>
                    {chunk.map(({ node }, index) => (
                      <Project
                        key={`project-${index}`}
                        id={index}
                        {...node}
                        separation="my-3"
                      />
                    ))}
                  </Fragment>
                ))}
              </Row>

              {!showingMore && (
                <Row className="mt-2">
                  <Col sm="12" className="text-center">
                    <Button
                      color="primary"
                      style={primaryStyle}
                      onClick={this.handleClick}
                    >
                      <span>Load more</span>
                    </Button>
                  </Col>
                </Row>
              )}
            </Container>
          </main>
        </Layout>
      </Fragment>
    )
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
                fluid(maxWidth: 850, quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
