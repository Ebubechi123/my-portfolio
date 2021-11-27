import React,{useContext} from 'react';
import { InputStateProvider } from "../../State Mangement/InputState";

const Input = () => {
    const [input,setInput] = useContext(InputStateProvider);
    const InputHandler=(e)=>{
  

        const NewValue = e.target.value;
        const addedUp = NewValue + NewValue
         setInput(addedUp)
    }
    return (  
    
      <>
      <div className="input-wrapper">
      <div className="input-box">
      <input type="text" onChange={(e)=>InputHandler(e)} value={input} />
      </div>
      </div>
      </>
    );
}
 
export default Input;