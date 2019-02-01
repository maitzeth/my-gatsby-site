import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const FooterWrapper = styled.footer`
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  background-color: ${props => props.theme.secondaryColor};
  max-width: 1600px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 50px;
`;

const FooterText = styled.small`
  margin: 0;
  color: ${props => props.theme.primaryColor};
  font-size: 0.7rem;
  text-align: center;
`;

const Heart = styled.i`
  color: ${props => props.theme.redColor};
`;

const Footer = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterText>Made with <Heart className="fa fa-heart" aria-hidden="true"></Heart> by me - { year }</FooterText>
      </FooterGrid>
    </FooterWrapper>
  )
}

export default Footer;