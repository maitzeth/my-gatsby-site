import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring'
import Img from 'gatsby-image'
import styled from 'styled-components'
import moment from 'moment'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Imagen } from '../components/styles/HeaderWrapper'
import {
  Container,
  Row,
  Col,
  Title,
  Lead,
} from '../components/Layout/Framework'
import BtnExternal from '../components/styles/BtnExternal'

const ProjectInner = styled.div`
  padding-top: 5em;
  padding-bottom: 2em;
`

const SingleTitle = styled(Title)`
  margin-bottom: 3rem;
  font-weight: 300;
  font-size: 3rem;

  &:after {
    content: '';
    display: block;
    height: 3px;
    margin: 0.5em auto;
    width: 50px;
    background-color: ${props => props.theme.redColor};
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 2rem;
  }
`

const MetaTitle = styled(Title)`
  text-align: left;
  font-size: 1.3rem;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`

const MetaText = styled(Lead)`
  font-size: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`

const TechWrapper = styled.div`
  display: flex;
`

const Tech = styled.div`
  background-color: ${props => props.theme.redColor};
  padding: 0.5em 1em;
  color: ${props => props.theme.whiteColor};
  margin: 0 0.3em;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0.1em;
    padding: 0.3em 0.5em;
    width: 100%;
    text-align: center;
  }
`

const CodeWrapper = styled.div`
  position: relative;
  margin: 2em 0;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin-bottom: 2rem;
  }
`

const Bar = styled.div`
  display: block;
  position: absolute;
  height: 24px;
  background-color: #ddd;
  width: 100%;
  color: #6a6a6a;
  z-index: 10;
  top: -24px;
`

const BarTitle = styled.h2`
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  font-family: MontSerrat, Tahoma, Arial, sans-serif;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #8a8a8a;
`

const Buttons = styled.i`
  height: 12px;
  width: 12px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 10px;

  &:before {
    height: 12px;
    width: 12px;
    display: inline-block;
    background-color: #ff5f57;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 10px;
    content: ' ';
    left: 16px;
    background-color: #ffbd2e;
    top: 0;
  }

  &:after {
    height: 12px;
    width: 12px;
    display: inline-block;
    background-color: #ff5f57;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 10px;
    content: ' ';
    left: 32px;
    background-color: #28ca41;
    top: 0;
`

const SiteURLWrapper = styled.div`
  text-align: center;
`

const SingleProject = ({ data, location }) => {
  const { title, date, techs, role, url } = data.markdownRemark.frontmatter
  const HeaderImage =
    data.markdownRemark.frontmatter.cover.childImageSharp.fluid

  const convertedDate = moment(date, 'DD-MM-YYYY').format('LL')

  const codeImage = data.markdownRemark.frontmatter.code.childImageSharp.fluid

  const titleCode = title.split(' ').join('-')

  const postNode = data.markdownRemark.frontmatter

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO
        pathname={location.pathname}
        postNode={postNode}
        excerpt={data.markdownRemark.excerpt}
        single
      />

      <Container>
        <ProjectInner>
          <Row>
            <Col>
              <Spring
                delay={300}
                from={{ transform: 'translateY(10%)', opacity: '0' }}
                to={{ transform: 'translateY(0px)', opacity: '1' }}
              >
                {props => <SingleTitle style={props}>{title}</SingleTitle>}
              </Spring>
            </Col>
          </Row>

          <Row align="center">
            <Spring delay={500} from={{ opacity: '0' }} to={{ opacity: '1' }}>
              {props => (
                <Fragment>
                  <Col size="6" style={props}>
                    <Row>
                      <Col size="6">
                        <MetaTitle>Fecha</MetaTitle>
                        <MetaText>{convertedDate}</MetaText>
                      </Col>
                      <Col size="6">
                        <MetaTitle>Role</MetaTitle>
                        <MetaText>{role}</MetaText>
                      </Col>
                    </Row>
                    <Row>
                      <Col size="12">
                        <MetaTitle>Tecnologías</MetaTitle>
                        <TechWrapper>
                          {techs.map(tech => (
                            <Tech key={tech.toLowerCase()}>{tech}</Tech>
                          ))}
                        </TechWrapper>
                      </Col>
                    </Row>
                  </Col>
                  <Col size="6" style={props}>
                    <Imagen fluid={HeaderImage} />
                  </Col>
                </Fragment>
              )}
            </Spring>
          </Row>

          <Row align="center">
            <Spring
              delay={400}
              from={{ transform: 'translateY(10%)', opacity: '0' }}
              to={{ transform: 'translateY(0px)', opacity: '1' }}
            >
              {props => (
                <Col>
                  <CodeWrapper style={props}>
                    <Bar>
                      <BarTitle>{`${titleCode}.js`}</BarTitle>
                      <Buttons />
                    </Bar>
                    <Img fluid={codeImage} />
                  </CodeWrapper>
                </Col>
              )}
            </Spring>
          </Row>
          <Row>
            <Col>
              <SiteURLWrapper>
                <BtnExternal href={url}>Visitar sitio</BtnExternal>
              </SiteURLWrapper>
            </Col>
          </Row>
        </ProjectInner>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        techs
        role
        url
        cover {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        code {
          childImageSharp {
            fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default SingleProject
