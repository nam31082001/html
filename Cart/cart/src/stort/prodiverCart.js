import Context from "./contextCart";
import { useReducer } from "react";
import { initCart } from "./reducerCart";
import reducerCart from "./reducerCart";
const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducerCart,initCart)
    return(
        <Context.Provider value={[state,dispatch]}>
        {children}
    </Context.Provider>
    )
}
export default Provider