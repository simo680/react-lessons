import { useDispatch, useSelector} from 'react-redux'
import { delUserByIdAction, deleteFirstUserAction, deleteLastUserAction } from '../store/usersReducer'
import { fetchUserList } from '../asyncActions/users'
import { useEffect } from 'react'



function Users() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchUserList())
    // }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    })

    return (
        <div>
            <h2>Users Redux</h2>
            <div>
                <button onClick={() => dispatch(deleteLastUserAction())}>Delete last</button>
                <button onClick={() => dispatch(deleteFirstUserAction())}>Delete first</button>
                <button onClick={() => dispatch(fetchUserList())}>list</button>
            </div>
            <div>
                {users.map(elem => 
                <div key={elem.id} onDoubleClick={() => dispatch(delUserByIdAction(elem.id))}>
                    <p>{elem.name} {elem.age}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Users