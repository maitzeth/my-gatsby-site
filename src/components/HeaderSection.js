import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { Spring } from 'react-spring';
import Scroller from './Scroller';

const HeaderWrapper = styled.div`
  position: relative;
  height: 70vh;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    height: 100vh;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primaryColor};
    opacity: 0.8;
    z-index: 1;
  }
`;

const Imagen = styled(Img)`
  width: 100%;
  height: 100%;
`;

const HeaderTitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 70rem;
  text-align: center;
  padding: 0px 2rem;
  z-index: 2;
`;

const HeaderTitle = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
`;

const HeaderSubtitle = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
`;

const HeaderSection = () => (
  <Fragment>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "header.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          site {
            siteMetadata {
              title,
              subtitle
            }
          }
        }
      `}
      render={data => {

        const { title, subtitle } = data.site.siteMetadata;
        const { fluid } = data.placeholderImage.childImageSharp;

        return (
          <HeaderWrapper>
            <HeaderTitleWrapper>
              <Spring delay={300} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                { props => (
                    <HeaderTitle style={props}>
                      { title }
                    </HeaderTitle>
                  )
                }
              </Spring>
              <Spring delay={400} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                { props => (
                  <HeaderSubtitle style={props}>
                    {`<${subtitle} >`}
                  </HeaderSubtitle>
                  ) 
                }
              </Spring>
            </HeaderTitleWrapper>
            <Imagen fluid={fluid} />
            <Scroller />  
          </HeaderWrapper>
        )
      }}
    />
  </Fragment>
);

export default HeaderSection;
