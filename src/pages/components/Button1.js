import React from 'react';
import styles1 from './Button.module.css'; 


function Button1({handleMouseEnter}) {
  return (
    <div onClick={handleMouseEnter} className={styles1.Button1}>
        <span>Button</span>
        <span>Button</span>
    </div>
  );
}

export default Button1;