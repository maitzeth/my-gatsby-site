import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

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
`

const ItemLink = styled.a`
  display: block;
  padding: 0.3em;
`

const SocialItem = ({ icon, title, url }) => {
  const iconComponents = {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGithub,
  }

  const Icon = React.createElement(iconComponents[icon])

  return (
    <ItemWrapper>
      <ItemLink href={url} target="_blank" rel="nofollow noopener noreferrer">
        {Icon}
        <h5>{title}</h5>
      </ItemLink>
    </ItemWrapper>
  )
}

export default SocialItem
