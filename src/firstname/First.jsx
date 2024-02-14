import { useReducer } from "react";
import { calcualtorReducer } from "./firstfuction";

const initialState = {
  first: "",
  middle: "",
  last: "",

  FullName: "",
};

const CalculatorWithUseReducer = () => {
  const [state, dispatch] = useReducer(calcualtorReducer, initialState);

  return (
    <div>
      <h1>Full Name : {state.FullName}</h1>
      <input
        type="text"
        placeholder="Enter first Name"
        value={state.First}
        onChange={(e) => dispatch({ type: "first", value: e.target.value })}
      />
      <input
        type="text"
        value={state.Middle}
        placeholder="Enter Middle Name"
        onChange={(e) => dispatch({ type: "middle", value: e.target.value })}
      />
      <input
        type="text"
        value={state.Last}
        placeholder="Enter Last Name"
        onChange={(e) => dispatch({ type: "last", value: e.target.value })}
      />

      <div>
        <button onClick={() => dispatch({ type: "add" })}>Add</button>
      </div>
    </div>
  );
};

export default CalculatorWithUseReducer;
