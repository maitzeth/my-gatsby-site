import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 50px;
`;

// fluid Para imagenes que pueden modificarse con width
// fixed para imagenes de fondo

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 850, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <LogoWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </LogoWrapper>
    ) }
  />
)
export default Logo