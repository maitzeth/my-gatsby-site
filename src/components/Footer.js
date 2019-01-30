import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  background-color: ${props => props.theme.secondaryColor};
  max-width: 1600px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 50px;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterGrid>
      <h1>Footer</h1>
    </FooterGrid>
  </FooterWrapper>
);

export default Footer;