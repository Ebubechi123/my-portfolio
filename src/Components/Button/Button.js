import React from 'react';
// import './Button.css'
const Button = ({
    children,
    onClick,
    style
}) => {
    return ( 

    
    <button onClick={onClick} style={style}>{children}</button>
     );
}
 
export default Button;