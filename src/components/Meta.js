import React from 'react';
import { Helmet } from 'react-helmet';
import FaviconImg from '../assets/img/favicon.jpg';

const Meta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="icon" type="image/png" href={FaviconImg} />
    <title>My Title</title>
  </Helmet>
);

export default Meta;