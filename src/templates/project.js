import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import css from '../assets/css/page.module.scss'
import { Container, Row, Col } from 'reactstrap'
import moment from 'moment'
import CustomButton from '../components/CustomButton'

const Project = ({
  pageContext: { slug },
  data: { markdownRemark: postNode },
}) => {
  const {
    title,
    client,
    date,
    service,
    cover: {
      childImageSharp: {
        resize: { src },
      },
    },
  } = postNode.frontmatter

  const formatDate = moment(date, 'DD.MM.YYYY').format('LL')

  return (
    <Layout>
      <div className={css.projectWrapper}>
        <Container>
          <Row>
            <Col>
              <div
                className={css.projectImage}
                style={{ backgroundImage: `url(${src})` }}
              >
                <h2 className={css.projectTitle}>{title}</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 text-center">
            <Col sm="4">
              <h5 className={css.projectTitles}>Client</h5>
              <p className="lead">{client}</p>
            </Col>
            <Col sm="4">
              <h5 className={css.projectTitles}>Date</h5>
              <p className="lead">{formatDate}</p>
            </Col>
            <Col sm="4">
              <h5 className={css.projectTitles}>Service</h5>
              <p className="lead">{service}</p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col sm="12 text-center">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </Col>
          </Row>
          <Row>
            <Col sm="12 text-center">
              <CustomButton
                text="View project"
                link="http://unsplash.it"
                color="white"
                external={true}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        service
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`