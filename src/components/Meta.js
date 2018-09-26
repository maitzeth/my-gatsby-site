import React from 'react';
import { Helmet } from 'react-helmet';
import FaviconImg from '../assets/img/logo-white.png';

const Meta = ({ title, subtitle }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="icon" type="image/png" href={FaviconImg} />
    <title>{ title } | { subtitle }</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
  </Helmet>
);

export default Meta;