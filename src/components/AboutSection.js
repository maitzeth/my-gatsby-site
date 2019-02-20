import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Title, Lead } from './Layout/Framework'
import SocialItem from './styles/SocialItem'
import Btn from './styles/Btn'

const AboutInner = styled.div`
  margin: 0 auto;
  transform: translateY(-50px);
  position: relative;
  z-index: 2;
  background-color: ${props => props.theme.whiteColor};
  padding: 2em 1em;
  border-radius: 10px;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
    transform: translateY(0);
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: 600px;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 700px;
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: 900px;
  }
`

const SocialWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`

const ViewMoreWrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`

const AboutImageWrapper = styled.div`
  width: 200px;
  margin: 1em auto;
`

const AboutImage = styled(Img)`
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`

const AboutSection = ({ aboutText, social }) => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "front-me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AboutInner>
        <Title>About</Title>
        <AboutImageWrapper>
          <AboutImage fluid={data.file.childImageSharp.fluid} />
        </AboutImageWrapper>
        <Lead center>{aboutText}</Lead>
        <ViewMoreWrapper>
          <Btn to="/about">Saber más</Btn>
        </ViewMoreWrapper>
        <SocialWrapper>
          {social.map(social => (
            <SocialItem key={social.id} {...social} />
          ))}
        </SocialWrapper>
      </AboutInner>
    )}
  />
)

export default AboutSection
