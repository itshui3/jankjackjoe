
import React from 'react'

import circleSVG from './circle.svg';

function Circle() {
return (
<>
    <img 
    style={{
        transform: 'scale(0.25)',
        backgroundColor: 'grey'
    }}
    src={circleSVG} alt={'svg art'} />
</> 
)
}

export default Circle
