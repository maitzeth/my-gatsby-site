import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  padding: 2em;
`;

const HeaderTitle = styled.h1`
  font-size: 80px;
  letter-spacing: -0.04em;
  color: #fff;
  font-weight: 300;
  text-transform: lowercase;
  text-align: center;
  cursor: default;

  span {
    font-weight: 700;
    position: relative;
    transition: all 150ms ease;
    margin: 0 0.2em;

    b {
      position: relative;
      z-index: 2;
      font-style: none;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: all 150ms ease;
      z-index: 1;
    }

    &:hover {
      color: ${props => props.theme.primaryColor};

      &:after {
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 2.5em;
  }
`;

const HeaderText = ({ title }) => (
  <TextWrapper>
    <HeaderTitle>
      Hi, i'm
      <span>
        <b>{title}</b>
      </span>
    </HeaderTitle>
  </TextWrapper>
);

export default HeaderText;
