// useEffect
import React, {useState, useEffect} from "react";

function App() {
    const [type, setType] = useState("users");
    const [date, setDate] = useState([]);
    const [pos, setPos] = useState({x: 0, y: 0});

    // console.log("component render")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setDate(json))
        return () => {
            console.log("Cleaner", type);
        }
    }, [type]);

    const mouseMoveHendler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    useEffect(() => {
        console.log("ComponentDidMount");
        window.addEventListener("mousemove", mouseMoveHendler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHendler)
        }
    }, []);

    return (
        <div>
            <h1>Resourde: {type}</h1>

            <button onClick={() => setType("users")}>users</button>
            <button onClick={() => setType("todos")}>to do</button>
            <button onClick={() => setType("posts")}>posts</button>

            {/*<pre>{JSON.stringify(date, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;

