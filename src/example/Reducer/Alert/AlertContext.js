import React, {useContext, useReducer} from "react";

const AlertContext = React.createContext();
// const AlertToggleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}

const HOW_ALERT = "show";
const HIDE_ALERT = "hide";


const reducer = (state, action) => {
    switch (action.type) {
        case HOW_ALERT:
            return {...state, visible: true, text: action.text}
        case HIDE_ALERT:
            return {...state, visible: false}
        default:
            return state
    }
}

export const AlertProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {visible: false, text: ""})

    const show = (text) => dispatch({ type: HOW_ALERT, text });
    const hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
            {/*<AlertToggleContext.Provider value={toggleAlert}>*/}
            {children}
            {/*</AlertToggleContext.Provider>*/}
        </AlertContext.Provider>
    );
}