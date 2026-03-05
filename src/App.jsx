import React from 'react'
import { useState } from 'react'

import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  const [todo,settodo]=useState([
    {id:1, tittle:"kaam kar le bhai",iscomleted:false}
  ])

  
 
   

 
  return (
    <div className='text-white flex w-screen h-screen bg-gray-600 p-10'>
      
      
     <Create  todo={todo} settodo={settodo}/> 
     <Read todo={todo} settodo={settodo} />
    
      
    </div>
  )
}

export default App