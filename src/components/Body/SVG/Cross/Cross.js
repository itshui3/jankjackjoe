
import React from 'react'

function Cross() {
return (
<>
    <svg width="25%" height="25%">
        <line stroke="black" strokeWidth="1.5"
        x1="0%" y1="0%"
        x2="100%" y2="100%"
        />
        <line stroke="black" strokeWidth="1.5"
        x1="100%" y1="0%"
        x2="0%" y2="100%"
        />
    </svg>
</>
)
}

export default Cross
