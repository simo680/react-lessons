import { useEffect } from "react"

function Block(){

    // 4 режим работы: выполнение кода после РАЗМОНТИРОВАНИЯ компонента Block
    // useEffect(() => {
    //     return () => {
    //         console.log('Размонтирование компонента Block!')
    //     }
    // }, [])

    // 4.2 режим работы: выполнение кода после МОНТИРОВАНИЯ или РАЗМОНТИРОВАНИЯ компонента Block
    useEffect(() => {
        console.log('Монтирование компонента Block!')
        return () => {
            console.log('Размонтирование компонента Block!')
        }
    }, [])

    return(
        <div style={{color: 'red'}}>
            <h2>Смонтирован!</h2>
        </div>
    )
}

export default Block