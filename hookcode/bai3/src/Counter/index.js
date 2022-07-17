import { useState } from 'react'

const Counter = () => {
    const [count1, setCount1] = useState('0')
    const [count2, setCount2] = useState('0')
    const Count1 = () => {
        setCount1(parseInt(count1)+1)
    }
    const Count2 = () => {
        setCount2(parseInt(count2)+2)
    }

    return (
        <>
            {count1}<br/>
            <button onClick={() => Count1()}>add1</button><br />
            {count2}<br/>
            <button onClick={() => Count2()}>add2</button>

        </>

    )
}
export default Counter