import React,{useState,createContext} from 'react';


export const InputStateProvider = createContext()

export const InputState = (props) => {
const [input, setInput]  = useState("")
    return ( 
        <>
        <InputStateProvider.Provider value={[input,setInput]}>
                    {props.children}
        </InputStateProvider.Provider>
        </>
     );
}
 
