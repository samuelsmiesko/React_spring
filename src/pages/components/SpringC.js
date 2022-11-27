

import { useSpring, animated } from 'react-spring';

export default function Springc() {
    const fade = useSpring({
        
        from:{
            opacity: 0,  
        },
        to:{
            opacity: 1
        },
        config: { duration: 3000 }
    });
    console.log(fade)
  return (
      
        <animated.div style={fade}>
            <p style={c1Style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illum vero nemo inventore hic aspernatur quia ipsum illo 
                quaerat reprehenderit perspiciatis nisi alias aliquam eveniet 
                laudantium, dolor quod aperiam. Provident, saepe.
            </p>
        </animated.div>
            
    )
};

const c1Style = {
    color: 'white',
    fontSize: '1.5em'
}



