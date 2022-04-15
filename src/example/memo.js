import React, {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num) {
    console.log("complexCompute")
    let i = 0;
    while(i < 200000000) i++

    return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    const style = useMemo(() => (
        {color: colored ? "darkred" : "black"}
    ), [colored]);



    useEffect(() => {
        console.log("Steles changed");
    },[style]);


    return (
        <div>
            <h1 style={style}>Сalculated value: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Put it away</button>
            <button onClick={() => setColored(prev => !prev)}>Colored</button>
        </div>
    );
}

export default App;
