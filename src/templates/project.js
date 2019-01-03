import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import css from '../assets/css/page.module.scss';
import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Img from 'gatsby-image';


const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const {
    client,
    date,
    service,
    link,
    cover: { childImageSharp: { fluid } }
  } = postNode.frontmatter;

  const formatDate = moment(date, 'DD.MM.YYYY').format('LL');

  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={css.projectWrapper}>
        <Container>
          <Row className="mt-3 align-items-center">
            <Col sm="6">
              <div className={css.imageWrapper}>
                <Img fluid={fluid} />
              </div>
            </Col>
            <Col sm="6">
              <Row>
                <Col sm="6">
                  <h6 className={css.projectTitles}>Client</h6>
                  <p className={`text-left ${css.pg}`}>{client}</p>
                </Col>
                <Col sm="6">
                  <h6 className={css.projectTitles}>Date</h6>
                  <p className={`text-left ${css.pg}`}>{formatDate}</p>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <h6 className={css.projectTitles}>Service</h6>
                  <p className={`text-left ${css.pg}`}>{service}</p>
                </Col>
              </Row>
              <Row className="my-2">
                <Col sm="12">
                  <div dangerouslySetInnerHTML={{ __html: postNode.html }} className={css.projectInfo} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="12 text-center">
              <CustomButton text="Visit site" link={link} color="white" external={true} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Project;

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
        link
        cover {
          childImageSharp {
            fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
