import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum, resetNum } from "./action";

const App = () => {
  const defaultValue = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={() => dispatch(incNum())}>Inrement +</button>
      <input type="text" value={defaultValue} />
      <button onClick={() => dispatch(decNum())}>Decrement -</button>
      <button onClick={() => dispatch(resetNum())}>Reset</button>
    </div>
  );
};

export default App;
