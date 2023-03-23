
function Todo(props){
    return(
        <div>
            <p>{props.title}</p>
            <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
        </div>
    )
}
export default Todo