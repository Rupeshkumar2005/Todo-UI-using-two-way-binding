import React from 'react'


const Read = (props) => {
    const todo=props.todo
    const settodo=props.settodo

    const deletehandler=(id)=>{
       const filtertodo= todo.filter(todo=>todo.id!=id)
        settodo(filtertodo)

    }

    const rendertodo= todo.map((todo)=>{
    return <li key={todo.id}className='mb-3 flex justify-between items-center p-4 bg-gray-900 rounded'><span className='text-xl font-thin'>{todo.tittle}</span>  <span  onClick={()=>{deletehandler(todo.id)}}>Delete</span></li>

   })
   
  return (
    <div className="  w-[20%] px-10 py-3 ">
         <h1 className='mb-10 text-5xl font-thin' ><span className='text-pink-400'>Pendig</span><br />todo</h1>
     <ol >{rendertodo}</ol>
    </div>
  )
}

export default Read