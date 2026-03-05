import React from 'react'
import { nanoid } from "nanoid";
import { useState } from 'react'

const Create = (props) => {
    const todo=props.todo
    const settodo=props.settodo

    const [tittle,settittle]=useState("")
     const submithandler= (e)=>{
    e.preventDefault();
    const newtodo= {
      id:nanoid(),
      tittle:tittle,
      iscomleted:false,
    }
    // let copytodo=[...todo];
    // copytodo.push(newtodo);
    // settodo(copytodo);
    settodo([...todo,newtodo])
    settittle("")
   

  }
  return (
    <div className=' w-[80%] p-10 text-'> 
        <h1 className='mb-10 text-5xl font-thin'> Set  <span className='text-red-400'>Remainder</span> for <br /> Task</h1>
        <form onSubmit={submithandler} >
        <input className="p-2 border-b w-full  text-2xl font-thin outline-0"  type="text" onChange={(e)=>{settittle(e.target.value)}} value={tittle} placeholder='tittle' />
        <br />
        <br />
        <button className='mt-5text-xl px-10 py-2 border rounded '>crete todo list</button>

      </form>
      
    </div>
  )
}

export default Create