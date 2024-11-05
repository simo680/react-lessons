

import {
  incrementCount,
  decrementCount,
  removeFromCart,
  addToCart,
} from "../store/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);

  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(product))
})

  return (
    <div>
      <h1>Bucket</h1>
      {product.map((elem) => (
        <div key={elem.id} onDoubleClick={() => dispatch(removeFromCart(elem))}>
          <span>{elem.title}</span>
          <button onClick={() => dispatch(decrementCount(elem.id))}>-</button>
          <span>{elem.count}</span>
          <button
            onClick={() => dispatch(incrementCount(elem.id))}
            disabled={elem.count >= 25}
          >
            +
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          dispatch(addToCart({ title: prompt("Enter product name:") }))
        }
      >
        ADD
      </button>
    </div>
  );
}

export default ProductList;
