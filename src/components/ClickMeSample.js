import React, { useState } from 'react'

const ClickMeSample = () => {
    const [ input, setInput ] = useState("")
    const [ count, setCount ] = useState(0)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setCount(input.length + count)
        setInput("")
    }


    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: '155px' }}>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <button type='submit' >Click Me</button>
                </form>
                <p style={{ fontSize: '25px' }}>Input: {input}</p>
                <p style={{ fontSize: '25px' }}>Character Count: {count}</p>
            </div>
        </>
    )

}

export default ClickMeSample