import React from 'react';
import Meta from './Meta';
import Menu from './Navbar/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';

const Layout = ({ children }) => (
  <main>
    <Meta />
    <Menu />
    { children }
  </main>
);

export default Layout;