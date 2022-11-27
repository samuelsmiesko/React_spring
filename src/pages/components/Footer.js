import React from 'react';
import styles from '../my-style.module.css';
import { SocialIcon } from 'react-social-icons';
import styles2 from './footer.module.css';

function Footer() {

  
  return (
    <nav className={styles.Footer}>
        
        <h1>Name of Company</h1>
        <div className={styles2.Footer}>
          <span><SocialIcon url="https://twitter.com/" style={{ height: 100, width: 100 }}/></span>
          <span><SocialIcon url="https://pinterest.com/" style={{ height: 100, width: 100 }}/></span>
          <span><SocialIcon url="https://instagram.com/" style={{ height: 100, width: 100 }}/></span>
          <span><SocialIcon url="https://facebook.com/" style={{ height: 100, width: 100 }}/></span>
        </div>
        <div style={{position: "relative", top: "35%"}}>
          @copyright
        </div>
    </nav>
  );
}



export default Footer;

