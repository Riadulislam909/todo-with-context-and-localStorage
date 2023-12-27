import { createContext, useContext } from "react";

//create context and initialize the values
export const TodoContext = createContext({
    //in Context api we pass the function and variable only. we define it in where it's working (App.jsx)
    todos: [
        {
            id: 1,
            todoTile: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todoTitle)=>{},
    updateTodo: (id, todoTitle)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}

});

//create useContext for making hook
export const useTodo = ()=>{
    return useContext(TodoContext);//need to pass the context
}

//create provider
export const TodoProvider = TodoContext.Provider;