import React from 'react';
import styled from 'styled-components';

const ScrollerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 2px;
  background: rgba(255, 255, 255, 0.04);
  height: 120px;
  overflow: hidden;
  span {
    content: '';
    position: absolute;
    height: 40px;
    background-color: ${props => props.theme.blackColor};
    width: 2px;
    animation: scroller 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  }
  @keyframes scroller {
    0% {transform: translateY(-52px)}
    100%  {transform: translateY(188px)}
  }
`;

const Scroller = () => (
  <ScrollerWrapper>
    <span></span>
  </ScrollerWrapper>
);

export default Scroller;