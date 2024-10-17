import React from 'react'

export default function Todolist({todos , delet}) {
  return (
    <>
    
    {
      todos.map((todo , ind)=>{
        return (
          <div key={todo.id}>
              <div className='bg-slate-300 mt-5 flex w-[55%]  justify-between mx-auto '>
              <h3 className='text-2xl text-center p-2 ' >{todo.todo}</h3>
              <button
              onClick={()=>delet(todo.id)}
               className=' bg-red-700 p-3 text-white'>
                Delet
                </button>

            </div>
            </div>
          )
        })
      }  


      </>

  )
}
