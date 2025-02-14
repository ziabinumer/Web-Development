import {useState} from "react"

export default function Counter() {
    let [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        if (!counter) {
            return;
        }
        setCounter(counter - 1);
    }

    const reset = () => {
        if (counter) {
            setCounter(0);
        }
    }
    
    return (
        <div className="counterSection">
            <h1 className="counter">
                {counter}
            </h1>
            <div className="actions">
                <button onClick={increase}>+</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrease}>-</button>
                
            </div>
        </div>
    )
}