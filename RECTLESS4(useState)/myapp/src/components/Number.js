import { useState } from "react";


function Number() {

    // За все динамическое на стороне компонента отвечает хук Usestate
    // useState - это функция, которая позволяетз заставить компонент обновится
    // Результатом работы функции являются два выражения: 
  
  
    // 1) State - фактичечкие значение состояние, которое можно читать/отображать на стороне разметки
    // 2) setState - это функция, которая фактически позволяет компоненту обновитчя в момент вызова
    // Примечание: чтобы указать новое значение стейта - необходимо вызвать сетСТтейт и указать новое значение
    // еще: сам стейт (без функции сетСтейт)
    const [count, setCount] = useState(0)
  
    function addHandler() {
        let answer = prompt()
        if (isNaN(answer)){
            alert('указанное значение не является числом')
        } else {
            setCount(count + +answer)
        }
    }

    function removeHandler() {
        let answer = prompt()
        if (isNaN(answer)){
            alert('указанное значение не является числом')
        } else {
            setCount(count - answer)
        }
    }

    return (
     <div>
        <h1>Счетчик</h1>
      <h1 style={{color: (count % 2 == 0 ? 'red' : 'green')}}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Инкремент</button>
      <button onClick={() => setCount(count - 1)}>Декремент</button>
      <button onClick={() => setCount(count + 100)}>Увеличить</button>
      <button onClick={() => setCount(count - 100)}>Уменьшить</button>
      <button onClick={() => addHandler()}>Инкремент</button>
      <button onClick={() => removeHandler()}>Декремент</button>
     </div>
    );
}


export default Number