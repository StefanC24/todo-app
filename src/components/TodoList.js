import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Todo from './todo/Todo';

function TodoList (){

    const defaultTodo = {
        title: '',
        date: ''
    }

    const [newTodo, setNewTodo] = useState({
        title: '',
        date: ''
    })

    const [todos, setTodos] = useState([
        {
            title: 'wash dishes',
            completed: false,
            id: 1
        },
        {
          title: 'cook',
          id: 2

        }
])

    const deleteTodos = (todoToBeDeletedId) => {
        const newTodos = todos.filter(item => item.id !== todoToBeDeletedId)
        setTodos(newTodos)
    }
    const handleChange = (event) =>{
        setNewTodo({
            ...newTodo, 
            [event.target.name]: event.target.value
        })
    }

    const createNewTodo = (event) =>{
        event.preventDefault();
        const newTodos =[...todos, {...newTodo, completed: false, id: uuidv4() }]
        setTodos(newTodos)
        setNewTodo(defaultTodo)
    }
        
    return(
        <div>
            <h1>Things to do today:</h1>
        <form onSubmit={createNewTodo}>
            <input onChange={handleChange} type='text'value = {newTodo.title} name='title' placeholder='Add todo'></input>     
            <input onChange={handleChange} type='text'value = {newTodo.date} name='date' placeholder='Add todo'></input>
            <button>Add todo</button>     
        </form>
            {todos.map(item => <Todo {...item} deleteTodo ={deleteTodos}/>)}
            
        </div>
    )
}

export default TodoList;