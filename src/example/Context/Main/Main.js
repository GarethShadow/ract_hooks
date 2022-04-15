import React from "react";
// import {useAlertToggle} from "../Alert/AlertContext";
import {useAlert} from "../Alert/AlertContext";

function Main() {

    // const toggle = useAlertToggle();

    const {toggleAlert} = useAlert();

    return (
        <>
            <h1>Hellp in the context example</h1>
            <button onClick={toggleAlert}>Show alert</button>
        </>
    );
}

export default Main;