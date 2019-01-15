import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import LeadParagraph from './styles/LeadParagraph';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.whitesmokeColor};
  height: 50px;
  display: flex;
  align-items: center;
`;

const FooterText = styled(LeadParagraph)`
  color: ${props => props.theme.whitesmokeColor};
  margin: 0;
  font-size: 0.8em;
`;

const Heart = styled.span`
  .fa-heart {
    color: red;
    margin: 0 5px;
  }
`;

const Foot = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <Footer>
      <Container>
        <Row>
          <Col sm="12" className="text-center">
            <FooterText>
              Made with
              <Heart>
                <i className="fa fa-heart" aria-hidden="true" />
              </Heart>
              by me. © {year}
            </FooterText>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Foot;
