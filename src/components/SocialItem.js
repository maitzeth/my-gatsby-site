import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const SocialItem = ({ name, url }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${name} d-block`} />
      <h6>{name}</h6>
    </a>
  </li>
);

export default SocialItem;
