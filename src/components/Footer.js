import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 60px;
  background-color: ${props => props.theme.secondaryColor};
  max-width: 100%;
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