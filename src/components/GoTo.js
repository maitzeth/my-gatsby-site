import React from 'react';
import styled from 'styled-components';
import { jumpArrow } from './styles/KeyFrames';

const GoToWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

const GoToItem = styled.div`
  border: 2px solid #fff;
  mix-blend-mode: exclusion;
  width: 30px;
  height: 60px;
  border-radius: 15px;

  span {
    display: block;
    background: #fff;
    position: absolute;
    top: 3px;
    left: 50%;
    height: 15px;
    width: 2px;
    transform: translate(-50%, 0%);
    animation: ${jumpArrow} 400ms infinite alternate cubic-bezier(0.44, -0.31, 1, 0.47);

    @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
      height: 7px;
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 20px;
    height: 40px;
  }
`;

const GoTo = () => (
  <GoToWrapper>
    <GoToItem>
      <span />
    </GoToItem>
  </GoToWrapper>
);

export default GoTo;
