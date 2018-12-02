import React from 'react'
import css from '../assets/css/about.module.scss'

const SocialItem = ({ name, url }) => (
  <li className={css.socialElement}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${name} d-block`} />
      <h6 className="m-0">{name}</h6>
    </a>
  </li>
)

export default SocialItem
