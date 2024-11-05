function AddTodo(props) {
    
    const {addNewTodo} = props
    
    function handler(event) {
        if (event.key === 'Enter') {
            addNewTodo(event.target.value)
        }
    }

    return(
        <div className="input_elem">
            <input onKeyDown={handler}/>
        </div>
    )   
}

export default AddTodo