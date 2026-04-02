
import { createContext, useState } from "react";

export const todocontext=createContext(null);
const Wrapper = (props) => {
    const [todo,settodo]=useState([
    {id:1, tittle:"kaam kar le bhai",iscomleted:false}
  ])
 return (
    <todocontext.Provider value={[todo,settodo]}>
        {props.children}

    </todocontext.Provider>
 )
}

export default Wrapper