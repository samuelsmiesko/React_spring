import React, {useEffect, useState} from 'react';
import styles from '../my-style.module.css'; 
// import { Container } from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button1 from './Button1'


function Blog2() {



    const [isHover, setIsHover] = useState(false);
    const myStyle = {
        display: isHover ? 'flex' : 'none',
        

    };

    const handleMouseEnter = () => {      
        setIsHover(current => !current); 
          
    };

    useEffect(() => {
        Aos.init({ duration: 500});
      },[]);
      
  return (
    <>
    <div data-aos="fade-up" className={styles.Blog2}>
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
        <div style={myStyle}>
            <div className={styles.Blog2_1} >
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Earum modi aperiam, 
                    quo vel esse, fugit aut neque voluptates quaerat 
                    nesciunt possimus. Est harum, numquam totam soluta 
                    ducimus vitae vel nostrum?
                </p>
            </div>
        </div>
        <Button1  handleMouseEnter={handleMouseEnter}/>

    </div>
    
    </>
  )
  
}

export default Blog2;