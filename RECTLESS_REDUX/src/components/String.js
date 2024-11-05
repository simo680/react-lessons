import { useDispatch, useSelector } from "react-redux";
import { initCapAction, lowerCaseAction, newStringAction, upperCaseAction } from "../store/stringReducer";

function String() {

  const string = useSelector((store) => store.string);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>String Redux</h2>
      <h3>{string}</h3>
      <div>
        <button onClick={() => dispatch(upperCaseAction())}>to Upper</button>
        <button onClick={() => dispatch(lowerCaseAction())}>to Lower</button>
        <button onClick={() => dispatch(initCapAction())}>to init</button>
        <button onClick={() => dispatch(newStringAction(prompt()))}>NEW_STRING</button>
      </div>
    </div>
  );
}

export default String;
