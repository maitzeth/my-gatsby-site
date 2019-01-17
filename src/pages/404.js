import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Title from '../components/styles/Title';
import CustomBtnLink from '../components/styles/CustomBtnLink';

const ErrorWrapper = styled.section`
  height: calc(100vh - 50px);
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ErrorTitle = styled(Title)`
  color: #fff;
  font-weight: 300;
`;

const ErrorBtnWrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`; 

const NotFoundPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <ErrorWrapper>
      <Container>
        <Row>
          <Col>
            <ErrorTitle>Sorry, this page doesn't exists.</ErrorTitle>
            <ErrorBtnWrapper>
              <CustomBtnLink to="/"><span>Return</span></CustomBtnLink>
            </ErrorBtnWrapper>
          </Col>
        </Row>
      </Container>
    </ErrorWrapper>
  </Layout>
);

export default NotFoundPage;
