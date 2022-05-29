import React,{useState} from "react"
import InputField from "../InputField"
import TodoList from "../TodoList"
const defaultTodos = [{
     id: 0,title: 'todo 1',done: false
}]
let uniqueId = 1;
const Todo = () => {

    const [todos, setTodos] = useState(defaultTodos)


    const handleAdd = (title) => {
        setTodos([ { id: uniqueId++,title:title, completed:false},...todos])
    }
    const handleTodoCompleted = (id) => {
        const mapped = todos.map(todo => {
            return todo.id === id ? {...todo, done:!todo.done }:{...todo} 
        });
        setTodos(mapped);
    }
    return(
        <>
       
        <InputField addTodo ={handleAdd}/>
        <TodoList todos={todos} handleCompleted={handleTodoCompleted}/>

        </>
    )
}
export default Todo;