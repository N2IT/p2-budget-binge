import React, { useState } from 'react'

function ClickMe() {
const [ input, setInput ] = useState("")
const [ count, setCount] = useState(0)

const handleSubmit = (e) => {
    e.preventDefault()
    setCount(input.length + count)
    setInput("")
}

  return (
    <div style={{textAlign:'center', paddingTop: '155px'}}>
    <form id='count' onSubmit={handleSubmit}>
        <label htmlFor='Click Me'>Let's count characters </label>
        <input type='text' value={input} name='input' id='input' onChange={(e) => setInput(e.target.value)}></input>&nbsp;
        <button name='submit'>Click Me</button>
    </form>
    <p style={{ fontSize: '25px'}}>Character Count: {count}</p>
    </div>
  )
}

export default ClickMe