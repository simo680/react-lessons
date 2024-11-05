import TodoItem from "./TodoItem"


function TodoList(props) {
   
    const {todos, removeTodo, changeTodo} = props
    
    
    return (
        <div>
           {todos.map(elem => <TodoItem  
                                key={elem.id}
                                id={elem.id} 
                                title={elem.title}
                                completed={elem.completed}
                                removeTodo={removeTodo}
                                changeTodo={changeTodo}
                                />)}
        </div>
    )
}

export default TodoList