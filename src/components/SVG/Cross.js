
import React from 'react'

import circleSVG from './circle.svg';

function Cross() {
return (
<>
    <img 
    style={{
        transform: 'scale(0.25)',
        backgroundColor: 'black'
    }}
    src={circleSVG} alt={'svg art'} />
</>
)
}

export default Cross
