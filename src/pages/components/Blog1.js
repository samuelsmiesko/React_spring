import React, {useEffect} from 'react';
import styles from '../my-style.module.css'; 
// import { Container } from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Blog1() {

    useEffect(() => {
        Aos.init({ duration: 500});
  
      },[]);
  return (
    <>
    <div data-aos="fade-right" className={styles.Blog1}>
        <div >
            <h2>Blog1</h2>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Earum modi aperiam, 
                quo vel esse, fugit aut neque voluptates quaerat 
                nesciunt possimus. Est harum, numquam totam soluta 
                ducimus vitae vel nostrum?

            </p>
        </div>
    </div> 
    </>
  )
  
}

export default Blog1;