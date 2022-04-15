import React from "react";
import {useAlert} from "./AlertContext";

const Alert = () => {
    const alert = useAlert();

    if (!alert.visible) return null

    return (
        <div onClick={alert.toggleAlert}>
            Ist very and very important massege
        </div>
    );
};

export default Alert;