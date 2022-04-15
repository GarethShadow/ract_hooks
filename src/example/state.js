// useState

import React, {useState} from "react";

function computeInitialCounter() {
    console.log("some colculations...");
    return Math.trunc(Math.random() * 20)
}

function App() {
    // const [counter, setCounter] = useState(0);
    // const [counter, setCounter] = useState(computeInitialCounter());
    const [counter, setCounter] = useState(() => computeInitialCounter());

    const [state, setState] = useState({
            title: "Counter",
            date: Date.now()
        }
    );

    function inclement() {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    }

    function dicrement() {
        setCounter(counter - 1);
    }

    function updateTitle() {
        setState(prev => {
            return {
                ...prev,
                title: "new title"
            }
        });
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={inclement}>Add</button>
            <button onClick={dicrement}>Put it away</button>
            <button onClick={updateTitle}>Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;