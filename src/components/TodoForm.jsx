import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();//we need addTodo method so we import it from useTodo hook

    const add = (e)=>{
        e.preventDefault();

        if(!todo) return; // if value is not available
        addTodo({todoTitle: todo, completed:false});//if available we call addTodo function. In App.jsx file, in addTodo defination we use spread operator to add values in a obj so we pass the obj and id was define in app.jsx file that's why we didn't give it here.
        setTodo("");// after adding we fresh our setTodo method
    }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
