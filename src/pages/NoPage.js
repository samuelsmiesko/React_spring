import React from 'react'
import styles from './my-style.module.css'; 
import logo from './gear.svg';

const NoPage = () => {
    return [
      <div className={styles.NoPage}>
        <h1>404</h1> 
        <div className={styles.App}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <img src={logo} className={styles.AppLogo2} alt="logo" />
        </div>
      </div>
    ]
    
  };
  
  export default NoPage;