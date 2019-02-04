import React from 'react';
import { graphql } from "gatsby"
import { Spring } from 'react-spring';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { HeaderWrapper, Imagen} from '../components/HeaderWrapper';
import moment from 'moment';


const SingleHeadingWrapper = styled.div`
  max-width: 800px;
  padding: 0 1.0875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    height: auto;
    padding: 1em 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    height: calc(70vh - 60px);
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    height: calc(50vh - 60px);
  }
`;

const SingleHeadingInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const SingleHeadingLeft = styled.div`
  padding: 0;
`;

const SingleHeadingRight = styled.div`
  padding: 0;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    padding: 20px;
  }
`;

const SingleMeta = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: ${props => props.top ? '1fr 1fr 1fr' : '1fr'};
  gap: 20px;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const SingleMetaItem = styled.li`

`;

const MetaTitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: 900;
  color: ${props => props.theme.secondaryColor};
  opacity: 0.5;
  margin: 0;

  &:after {
    content: "";
    display: block;
    height: 1px;
    background-color: ${props => props.theme.secondaryColor};
    width: 50px;
    margin: 0.5em 0;
    margin-bottom: 1em;
  }
`;

const MetaBody = styled.p`
  margin: 0;
  line-height: 1em;
  font-size: 0.7em;
  font-weight: bold;
`;

const TechWrapper = styled.span`
  display: flex;
  justify-content: space-between
`;

const Tech = styled.span`
  padding: 1em;
  border-radius: 5px;
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
`;

const SingleTitle = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
  padding: 1em 0;

  h2 {
    margin: 0;
  }
`;

const SingleProject = ({ data }) => {

  const { title, date, techs, role } = data.markdownRemark.frontmatter;
  const HeaderImage = data.markdownRemark.frontmatter.cover.childImageSharp.fluid
  const bottomImage = data.markdownRemark.frontmatter.code.childImageSharp.fluid;

  const convertedDate = moment(date, 'DD-MM-YYYY').format("MMM Do YY");


  return (
    <Layout>
      <Spring 
        delay={200} 
        from={{ transform: 'translateY(-10%)', opacity: '0' }} 
        to={{ transform: 'translateY(0px)', opacity: '1' }}
      >
        { props => (
            <HeaderWrapper single={true} opacity="0.3" style={props}>
              <SingleTitle>
                <h2>{ title }</h2>
              </SingleTitle>
              <Imagen fluid={HeaderImage} />
            </HeaderWrapper>
          ) 
        }
      </Spring>
      <SingleHeadingWrapper>
        <SingleHeadingInner>

          <SingleHeadingLeft>
            <Imagen fluid={bottomImage} />
          </SingleHeadingLeft>

          <SingleHeadingRight>
            <SingleMeta top={true}>

              <SingleMetaItem>
                <MetaTitle>
                  Client
                </MetaTitle>
                <MetaBody>
                  { date }
                </MetaBody>
              </SingleMetaItem>

              <SingleMetaItem>
                <MetaTitle>
                  Role
                </MetaTitle>
                <MetaBody>
                  { role }
                </MetaBody>
              </SingleMetaItem>

              <SingleMetaItem>
                <MetaTitle>
                  Date
                </MetaTitle>
                <MetaBody>
                  { convertedDate }
                </MetaBody>
              </SingleMetaItem>

            </SingleMeta>

            <SingleMeta>
              <SingleMetaItem>
                <MetaTitle>
                  Techs
                </MetaTitle>
                <MetaBody>
                  <TechWrapper>
                    { 
                      techs.map(tech => <Tech key={`tech-${tech.toLowerCase()}`}>{ tech }</Tech>)
                    }
                  </TechWrapper>
                </MetaBody>
              </SingleMetaItem>
            </SingleMeta>

          </SingleHeadingRight>


        </SingleHeadingInner>
      </SingleHeadingWrapper>      
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        techs
        role

        cover {
        childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        code {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SingleProject;