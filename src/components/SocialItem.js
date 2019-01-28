import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.li`
  text-align: center;
  margin: 0.5em 1em;
  transition: all 200ms ease;

  i { 
    font-size: 1.7rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0.5em 0.3em;
  }
`;

const ItemLink = styled.a`
  display: block;
  padding: 0.3em;
`;

const SocialItem = ({ icon, title, url }) => (
  <ItemWrapper>
    <ItemLink href={url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${icon}`} />
      <h5>{ title }</h5>
    </ItemLink>
  </ItemWrapper>
);

export default SocialItem