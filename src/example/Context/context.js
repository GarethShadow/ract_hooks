import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import Main from "../Main";
import Alert from "../Alert";
import {AlertProvider} from "../Alert/AlertContext";

function App() {

    return (
        <AlertProvider>
            <div className={"container"}>
                <Alert />
                <Main toggle={() => {}}/>
            </div>
        </AlertProvider>
    );
}

export default App;
