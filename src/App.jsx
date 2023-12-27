import { useEffect, useState } from "react";
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  //defining the methods
  const addTodo = (todoTitle)=>{

    setTodos((prev)=> [{id: Date.now(), ...todoTitle}, ...prev]);
  
  }
  const updateTodo=(id, todoTitle)=>{

    setTodos((prev)=> prev.map((eachValue)=> eachValue.id === id ? todoTitle : eachValue));
  
  }
  const deleteTodo = (id)=>{
    
    setTodos((prev)=> prev.filter((eachValue)=> eachValue.id !== id))
  
  }
  const toggleComplete = (id)=>{
  
    setTodos((prev)=> prev.map((eachValue)=> eachValue.id === id ? {...eachValue, completed: !eachValue.completed} : eachValue));
  
  }

  //now we process the value in local storage. local storage always work in client site or browser. So in server site it does not work.
  //localStorage always set key and value(value as string). It always get key and give as a string so we need to modify it to json format.
  
  //localStorage.getItem

  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos")); //in get and set key name should be same
  //check value if available or not
  if(todos && todos.length>0){
    setTodos(todos)
  }
  },[]);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  

  return (
    //after rapping we provide values
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className="w-full">
                {/* use key must*/}
                    <TodoItem todo={todo}/>            
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
