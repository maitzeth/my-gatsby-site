import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Item = styled(Link)`
  min-height: 300px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 40px, rgba(0, 0, 0, 0.2) 0px 15px 12px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  color: white;
  overflow: hidden;
  transition: all 0.3s ease-in-out 0s;
  border-radius: 10px;

  &:hover {
    color: white;
    transform: translateY(-6px);
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    min-height: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    min-height: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    min-height: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    min-height: 350px;
  }
`

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;

  div {
    overflow: hidden;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.secondaryColor};
    opacity: 0.5;
    transition: all 200ms ease;
  }

  &:hover {
    &:after {
      opacity: 0;
    }
  }
`

const Imagen = styled(Img)`
  width: 100%;
  height: 100%;
`

const ProjectItem = ({ node }) => {
  const { slug } = node.frontmatter
  const snapshot = node.frontmatter.cover.childImageSharp.fluid
  const code = node.frontmatter.code.childImageSharp.fluid

  return (
    <Item to={slug}>
      <Cover>
        <Imagen fluid={snapshot} />
        <Imagen fluid={code} />
      </Cover>
    </Item>
  )
}

export default ProjectItem
