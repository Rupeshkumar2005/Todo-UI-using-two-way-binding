import React from 'react'
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";






const Create = (props) => {
    const todo=props.todo
    const settodo=props.settodo

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    

 
     const submithandler= (data)=>{
    // data.preventDefault();
   
      data.id = nanoid();
      // tittle:tittle,
      data.iscomleted = false;
      const copytodo=[...todo];
      copytodo.push(data);
      settodo(copytodo)

      toast.success("todo created !");
      reset();


    };
    
  
  

    // let copytodo=[...todo];
    // copytodo.push(newtodo);
    // settodo(copytodo);
    // settodo([...todo,newtodo])
    // settittle("")
  

  
  return (
    <div className=' w-[80%] p-10 text-'> 
        <h1 className='mb-10 text-5xl font-thin'> Set  <span className='text-red-400'>Remainder</span> for <br /> Task</h1>
        <form onSubmit={handleSubmit(submithandler)} >
        <input 
          {...register("tittle",  {required:" tittle cannot be empty",})}
       className="p-2 border-b w-full  text-2xl font-thin outline-0"  type="text" placeholder='tittle' />
       <small className='font-thin text-red-400'>{errors?.tittle?.message}</small>
        <br />
        <br />
        <button className='mt-5text-xl px-10 py-2 border rounded '>crete todo list</button>

      </form>
      
    </div>
  )

}


export default Create