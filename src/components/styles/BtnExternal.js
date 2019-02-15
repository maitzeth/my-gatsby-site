import React from 'react'
import styled from 'styled-components'

const BtnWrapper = styled.a`
  position: relative;
  display: inline-block;
  max-width: 100%;
  text-decoration: none;

  &:hover {
    span:before {
      transform: scale(1, 0.99999999) translateZ(0);
    }
  }
`

const BtnInner = styled.span`
  position: relative;
  color: #242424;
  display: inline-block;
  z-index: 1;
  padding-bottom: 4px;
`

const BtnText = styled.span`
  position: relative;
  color: #242424;
  display: inline-block;
  text-decoration: none;
  transition: color 670ms linear 417ms;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 45%;
    left: -0.15em;
    right: -0.15em;
    background: ${props => props.theme.redColor};
    background-size: 100% 100%;
    transition: 380ms transform cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-origin: 50% 100%;
    transform: scale(0.98, 0) translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: -1;
    background-repeat: repeat-x;
  }
`

const Btn = ({ children, href, className }) => (
  <BtnWrapper
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    className={className}
  >
    <BtnInner>
      <BtnText>{children}</BtnText>
    </BtnInner>
  </BtnWrapper>
)

export default Btn
