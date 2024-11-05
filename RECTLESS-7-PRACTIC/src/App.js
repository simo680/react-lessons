import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 },
  ];

  const [items, setItems] = useState(data);

  

  function addNewItem() {
    let [name, price] = prompt().split(" ");
    let newItem = {
      id: Date.now(),
      name,
      price,
      count: 1,
    };
    setItems([...items, newItem]);

  }

  function incrementCount(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count < 25) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function decrementCount(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function removeItems(id) {
    let removedItems = items.filter((elem) => elem.id !== id);
    setItems(removedItems);
  }

  return (
    <div className="app">
      <h1 className="app__title">Товары</h1>
      <div className="app__controls">
        <button className="app__add-button" onClick={() => addNewItem()}>
          Добавить товар
        </button>
      </div>
      <div className="app__items">
        {items.map((elem) => (
          <div
            onDoubleClick={() => removeItems(elem.id)}
            className="item"
            key={elem.id}
          >
            <h3 className="item__name">{elem.name}</h3>
            <p className="item__price">{elem.price} ₽</p>
            <div className="item__count-controls">
              <button
                className="item__button item__button--decrement"
                onClick={() => decrementCount(elem.id)}
              >
                -
              </button>
              <p className="item__count">{elem.count}</p>
              <button
                className="item__button item__button--increment"
                onClick={() => incrementCount(elem.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
