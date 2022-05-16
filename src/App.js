import './index.css';
import React, { useState } from 'react'
import Logo from "./images/google_PNG.png"
import Button from './components/Button';
import Counter from './components/Counter';


const App = () => {

  // useState = hook
  const [count, setCount] = useState(0)

  // change the state of count
  const onClick = () => {
    setCount(count + 1)
    console.log(count);
  }

  const restartCounter = () => {
    setCount(0)
  }

  return (
    <div className='appContainer'>
      <div className='logo-container' >
        <img
          className='logo'
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='counter-container'>
        <Counter count={count}/>
        <Button text="Clik" isBtnClick={true} onBtnClick={onClick} />
        <Button text="Restart" isBtnClick={false} onBtnClick={restartCounter} />
      </div>
    </div>
  )
}

export default App
