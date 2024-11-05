import { useDispatch, useSelector } from "react-redux";
import {
  decrAction,
  incrAction,
  inputAction,
  resetAction,
} from "../store/countReducer";

function Counter() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch(incrAction(1))}>Increment</button>
        <button onClick={() => dispatch(decrAction(1))}>Decrement</button>
        <button onClick={() => dispatch(resetAction())}>RESET</button>
        <button onClick={() => dispatch(incrAction(100))}>
          Increment +100
        </button>
        <button onClick={() => dispatch(decrAction(100))}>
          Decrement -100
        </button>
        <button onClick={() => dispatch(inputAction(+prompt()))}>prompt</button>
      </div>
    </div>
  );
}

export default Counter;
