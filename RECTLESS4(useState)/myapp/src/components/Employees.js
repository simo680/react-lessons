
import { useState } from "react"




function Employees() {
    
    let data = [
        {id: 1, name:  'Alex', salary: 1000},
        {id: 2, name:  'Steven', salary: 400},
        {id: 3, name:  'John', salary: 9000},
        {id: 4, name:  'Neena', salary: 2000},
        {id: 5, name:  'Lorem', salary: 700},
    ]
    
    
    const [users, setUsers] = useState(data)
    
    function delLastUser() {
        setUsers(users.slice(0, -1))
    }

    function delfirstUser() {
        setUsers(users.slice(1))
    }

    function addNewUser() {
        let [name, salary] = prompt().split(' ')
        let NewUser = {
            id: Date.now(),
            name,
            salary: +salary
        }
        setUsers([...users, NewUser])
    }

    return (
        <div>
            <h1>Сотрудники</h1>
            <div>
                <button onClick={() => delLastUser()}>Delete last users</button>
                <button onClick={() => delfirstUser()}>Delete last users</button>
                <button onClick={() => addNewUser()}>Delete last users</button>
            </div>
            <div>
                {users.map(elem =>
                    <div key={elem.id}>
                        <h3>{elem.name}</h3>
                        <p>{elem.salary}</p>
                    </div>
                    )}
            </div>
        </div>
    )

}



export default Employees