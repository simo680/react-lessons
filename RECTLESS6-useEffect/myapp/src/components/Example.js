// useEffect - это функция (хук), которая следит за каждым этапом жизненного цикла компонента и 
// выполняет побочный код

import { useEffect, useState } from "react"
import Block from "./Block"

function Example(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // у useEffect существуют 4 режима работы
    // console.log('Инициализация!')

    // 1 режим работы: выполнение кода строго после МОНТИРОВАНИЯ компонента
    // useEffect(() => {
    //     console.log('Монитрование!')
    // }, [])

    // 2 режим работы: выполнение побочного кода после МОНТИРОВАНИЯ ИЛИ ОБНОВЛЕНИЯ компонента
    // useEffect(() => {
    //     console.log('Монтирование ИЛИ обновление!')
    // })

    // 3 режим работы: выполнение побочного кода после МОНТИРОВАНИЕ или ОБНОВЛЕНИЕ STATE1 (не state2)
    // useEffect(()=> {
    //     console.log('Монтирование ИЛИ обновление count1')
    // }, [count1])

    // useEffect(()=> {
    //     console.log('Монтирование ИЛИ обновление count2')
    // }, [count2])

    // 4 режим работы: выполнение кода после РАЗМОНТИРОВАНИЯ
    // см пример в компоненте BLOCK

    return(
        <div>
            <h2>{count1}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Refresh!</button>
            <h2>{count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>Refresh!</button>

            {(count1 < 5) && <Block/>}
        </div>
    )
}

export default Example