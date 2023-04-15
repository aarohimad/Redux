import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { handleIncrement,handleDecrement} from "../redux/actions";

const Redux = () => {

    const stateCounter = useSelector((state)=>{
       return state.ReducerFunctionForIncrementDecrement
    });

    const depatcher = useDispatch();
    console.log(stateCounter);
   
    return (
        <React.Fragment>
            <h1>Example of Redux</h1>
            <button onClick={()=>{
                depatcher(handleIncrement())
            }}> + </button>
            <button onClick={()=>{
                depatcher(handleDecrement())
            }}> - </button>
            <p>{stateCounter}</p>
        </React.Fragment>
    )
}

export default Redux;
