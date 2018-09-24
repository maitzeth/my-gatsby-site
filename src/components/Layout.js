import React from 'react';
import Meta from './Meta';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';

const Layout = ({ children }) => (
  <main>
    <Meta />
    <Navbar />
    { children }
  </main>
);

export default Layout;