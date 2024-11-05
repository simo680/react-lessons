import './App.css';
import TodoList from './components/TodoList'; 
import { useEffect, useState } from "react";
import AddTodo from './components/AddTodo';




function App() {
  
  let data = [
    {id: 1, title: 'Позавтракать', completed: true},
    {id: 2, title: 'Почистить огурцы', completed: false},
    {id: 3, title: 'Помыть кота', completed: true},
  ]

    const [todos, setTodos] = useState(data)
  
    

    function removeTodo(id) {
      let removeTasks = todos.filter((elem => elem.id !== id))
      setTodos(removeTasks)
    }

    function changeTodo(id){
      let changeTasks = todos.map(elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed
        }
        return elem
      })
      setTodos(changeTasks)
    }

    function addNewTodo(title) {
      let newTodo = {
        id: Date.now(),
        completed: false,
        title
      } 
      setTodos([...todos, newTodo])
    }

    useEffect(() => {
      let local_data = localStorage.getItem('todos')
      if(local_data) {
        setTodos(JSON.parse)
      } else {

      }
    }, [todos])


    useEffect(() => {
      localStorage.setItem
    })

  return (
  <div>
    <AddTodo addNewTodo={addNewTodo}/>
    <TodoList 
    todos={todos} 
              removeTodo={removeTodo}
              changeTodo={changeTodo}/>
    
  </div>
  )
}

export default App;
