import React from 'react';
import styles from '../my-style.module.css'; 


import 'aos/dist/aos.css';

// @ts-ignore
import sample from './video/videoin.mp4'

function Blog3() {

  return (
    <>
    <div className={styles.Blog3}>
            <video className={styles.videoTag} autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <p className={styles.paragraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Tenetur molestiae consequuntur numquam placeat sed vel 
              atque maxime! Sapiente alias velit, doloremque excepturi 
              earum quibusdam tempora temporibus quo corrupti provident 
              facere!
            </p> 
    </div>
    </>
  )
  
}

export default Blog3;