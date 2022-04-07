
import React, { useState } from 'react';
import Animation from './Animation';

// Build a card that will show our products
 export default function Item(props) {
    const [color, setColor] = useState("#80CED7");
    const description = 
    props.description !== null 
    ? props.description.slice(3, props.description.length - 4)
    : "";


    return (
      <>
                 <Animation {...props} color={color}/>
    </>
    )
}

