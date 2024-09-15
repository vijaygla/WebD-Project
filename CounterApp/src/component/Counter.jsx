import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
    }

    const handleReset = () => {
        setCount(0);
    }


    return (
        <>
            <h1>Count: {count}</h1>
            <label>
                <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} style={{border:"2px solid pink", borderRadius:"5px", marginBottom:"10px"}}/>
            </label>
            <div>
                <button onClick={handleIncrement} disabled={count >= 1000}>Increment</button>
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}
