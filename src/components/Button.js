import React from 'react'
import '../index.css'

// destructuring
const Button = ({ text, isBtnClick, onBtnClick }) => {
    return (
        <button 
            className={ isBtnClick ? "btn-click" : "btn-restart"} 
            onClick={onBtnClick}
        >
            {text}
        </button>
    )
}

export default Button