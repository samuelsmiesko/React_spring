import { Outlet, Link } from "react-router-dom";
import React from 'react';
import styles from './my-style.module.css'; 
import Footer from './components/Footer'


const Layout = () => {


  return (
    <>
      <nav className={styles.Nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
    
  )
};

export default Layout;