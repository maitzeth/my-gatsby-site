import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    max-width: 960px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    max-width: 1140px;
  }
`;

const TitleWrapper = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;
`;

const LeadWrapper = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
  text-align: ${props => props.center ? 'center' : 'left'};
`;

export const Container = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

export const Title = ({ children }) => (
  <TitleWrapper>
    { children }
  </TitleWrapper>
);

export const Lead = (props) => (
  <LeadWrapper {...props}>
    { props.children }
  </LeadWrapper>
);
