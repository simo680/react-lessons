
function TodoItem(props) {
    
    const {title, completed, id, removeTodo, changeTodo} = props
    
    return (
        <div 
            className="todo_item"
            onDoubleClick={() => removeTodo(id)}
            onClick={() => changeTodo(id)}
            style={{backgroundColor: (completed) ? 'green' : 'red'}}
        >
         <h1>{title}</h1>
         <p>{''+completed}</p>   
        </div>
    );
}

export default TodoItem