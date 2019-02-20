import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  background-color: #ffffff;
  background-image: url(${props => props.BGImage});
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  flex-direction: column;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primaryColor};
    opacity: 0.6;
  }
`

const ErrorMessage = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;

  h1 {
    font-size: 3.5em;
  }
`

const NotFoundPage = ({ data, location }) => {
  const image = data.allFile.edges[0].node.relativePath

  return (
    <Layout pathname={location.pathname}>
      <ErrorWrapper BGImage={image}>
        <ErrorMessage>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness. :(</p>
        </ErrorMessage>
      </ErrorWrapper>
    </Layout>
  )
}

export const ErrorPageQuery = graphql`
  query {
    allFile(filter: { name: { eq: "default-background" } }) {
      edges {
        node {
          publicURL
          relativePath
        }
      }
    }
  }
`

export default NotFoundPage
