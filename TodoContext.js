import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1, todo: "anything", completed: false }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    isToggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;