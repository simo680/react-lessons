import { useEffect, useState } from "react"

function User() {
    
    const [users, setUsers] = useState([])

    console.log('Test!');


    useEffect(() => {
    if (!localStorage.getItem('users') || localStorage.getItem('users') === '[]') {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } else {
        let data = JSON.parse(localStorage.getItem('users'))
        setUsers(data)
    }
       
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    function removeUsers(id) {
    
        let removeUsers = users.filter((elem => elem.id !== id))
        setUsers(removeUsers)
    }

    function remLastUser() {
        let remLastUser = users.slice(0, users.length - 1 )
        setUsers(remLastUser)
    }


    return (
        <div>
            <h2>Users</h2>
            <button onClick={()=>remLastUser()}>ZE HEALING REVARDS ZE HURTING</button>
            {users.map(elem => <p onDoubleClick={() => removeUsers(elem.id)} key={elem.id}>{elem.name}</p>)}
        </div>
    )
}

export default User