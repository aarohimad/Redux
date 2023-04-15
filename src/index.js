import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./redux/Store";
import { Provider } from "react-redux";

const ROOT = document.getElementById('root');
//Debugging
Store.subscribe(()=>{
    console.log(Store.getState());
})
ReactDOM.render(
    <Provider store={Store}>
           <App/>
    </Provider>,
    ROOT
);
