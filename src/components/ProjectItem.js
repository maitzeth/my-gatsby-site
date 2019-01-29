import React from 'react';
import styled from 'styled-components';
import { Spring, animated, config } from 'react-spring'
import Img from 'gatsby-image'

const Item = styled.div`
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

  &:hover {
    color: white;
    transform: translateY(-6px);
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    min-height: 300px;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  div {
    overflow: hidden;
  }
`;

const Content = styled.div`
  padding: 1rem;
  position: relative;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  height: 0;

  ${Item}:hover & {
    opacity: 1;
    height: 120px;
  }
`

const Name = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
`;

const ProjectItem = ({ delay, node }) => {

  const { slug, title } = node.frontmatter;
  const { fluid } = node.frontmatter.cover.childImageSharp;

  return (
    <Spring
      native
      delay={200 * delay}
      from={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }}
      to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      config={config.slow}
    >
    { props => (
        <animated.div style={props}>
          <Item to={slug}>
            <Cover>
              <Img fluid={fluid} />
            </Cover>
            <Content>
              <Name>{ title }</Name>
            </Content>
          </Item>
        </animated.div>
      ) 
    }
    </Spring>
  )
};

export default ProjectItem;