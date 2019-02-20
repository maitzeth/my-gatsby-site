import styled from 'styled-components'
import Img from 'gatsby-image'

export const HeaderWrapper = styled.header`
  position: relative;
  box-shadow: ${props =>
    props.single
      ? '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)'
      : ''};

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    height: ${props => (props.single ? 'auto' : '100vh')};
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    height: ${props => props.single && '30vh'};
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    height: ${props => props.single && '50vh'};
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    height: ${props => (props.single ? '70vh' : '70vh')};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primaryColor};
    opacity: ${props => (props.opacity ? props.opacity : '0.8')};
    z-index: 1;
  }
`

export const Imagen = styled(Img)`
  width: 100%;
  height: 100%;
`
