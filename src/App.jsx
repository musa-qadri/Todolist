
import { useGSAP  } from '@gsap/react';
import './App.css'
import Inputtodo from './components/Inputtodo'
import Todolist from './components/Todolist'
import { gsap } from 'gsap';
import { useCallback, useState } from 'react';


function App() {
  useGSAP(() => {
    gsap.from('.todo ',{
      x:-40,
      opacity:0,
      delay:1,
      // duration:1,
    })
    
}, []);

  const [todo , setTodo] = useState('')
  const [todos , setTodos] = useState([
    {
      todo:'Reading Books',
      id: Date.now(),
      completed: false,

    }
  ]);

     const handleAddtodo = () => {
      const todoArry = [...todos , {
        todo,
        id:Date.now(),
        completed:false,
      }]
      setTodos([...todoArry])
      setTodo('')
     }
     

   const onchangetoggle= useCallback((e)=>{
    setTodo(e.target.value)
    //  console.log(e.target.value)
   },[todo]);

   const handdledelet=useCallback( (id) =>{
     console.log(id)
     const filter = todos.filter((data)=>data.id !== id);
     
   },[])

  


  return (
    <div className='text-center w-[40%] mx-auto mt-11 ' >
      <h1 className='font-bold text-2xl todo '>Todo List</h1>
      <Inputtodo onChange={(e)=>setTodo(e.target.value)} onClick={handleAddtodo} value={todo} />
      <Todolist todos={todos} delet={handdledelet}/>
    </div>
  )
}

export default App;
