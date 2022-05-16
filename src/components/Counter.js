import React from 'react'

// destructure: insteead of using props.
const Counter = ({ count }) => {
    return (
        <div className='countContainer'>
            {count}
        </div>
    )
}

export default Counter