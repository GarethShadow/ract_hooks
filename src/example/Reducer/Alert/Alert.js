import React from "react";
import {useAlert} from "./AlertContext";

const Alert = () => {
        const alert = useAlert();

    if (!alert.visible) return null

    return (
        <div onClick={alert.hide}>
            {alert.text}
        </div>
    );
};

export default Alert;