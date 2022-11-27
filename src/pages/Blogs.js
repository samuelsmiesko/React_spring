import React from 'react';
import styles from './my-style.module.css'; 
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3'


const Blogs = () => {

    return (
      <>
        <h1 className={styles.Blog}>Blog Articles</h1>
        <div>
          <Blog1 />
        </div> 
        <div >
          <Blog2 />
        </div> 
        <div >
          <Blog3 />
        </div> 
        
      </>
    )
    
  };
  
export default Blogs;