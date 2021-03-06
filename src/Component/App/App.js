import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";

function useLogger(value) {
    useEffect(() => {
        console.log("Value change", value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const clear = () => setValue("")

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {
    const input = useInput("");
    const lastName = useInput("");

    useLogger(input.value);


    return (
        <div>
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>
            <button onClick={() => {
                input.clear()
                lastName.clear()
            }}>Dele</button>
            <h1>Name: {input.value} {lastName.value}</h1>
        </div>
    );
}

export default App;
