import React from 'react'

export default function Inputtodo({value,  onClick ,onChange}  ) {

   

  return (
    <div className='flex gap-2 justify-center mt-9 mx-auto' >

        <input
        onChange={onChange}
        value={value}
        placeholder='Enter todo'
         className='border border-slate-950 p-3 '
          type="text" />
        <button 
        disabled={value==''}
        style={{backgroundColor : value == '' && 'gray'}}
        onClick={onClick}
        className='border rounded-md text-white bg-emerald-400 p-2'
         >Add Todo
         </button>
      
    </div>
  )
}
