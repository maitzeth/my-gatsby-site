import React from 'react';
import Meta from './Meta';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <main>
    <Meta />
    { children }
  </main>
);

export default Layout;